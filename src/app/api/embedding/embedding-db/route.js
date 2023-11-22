import { NextResponse } from "next/server";
import PipelineSingleton from "@/lib/embedding";
import { data } from "@/content/fics";

export async function GET() {
  // only allow this in non-production environments
  if (process.env.NODE_ENV === "production") {
    return NextResponse.next();
  }
  async function batchUpsert(data, vectors, batchSize, pineconeIndex) {
    const batches = [];
    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize);
      const vectorBatch = vectors.slice(i, i + batchSize);
      batches.push(
        pineconeIndex.upsert(
          batch.map((fic, index) => ({
            id: fic.id,
            values: vectorBatch[index],
            metadata: {
              title: fic.title,
              author: fic.author,
              summary: fic.summary,
              updated: fic.updated,
              published: fic.published,
              Rated: fic.Rated,
              Language: fic.Language,
              Genre: fic.Genre || "",
              Chapters: fic.Chapters,
              Words: fic.Words,
              Reviews: fic.Reviews,
              Favs: fic.Favs,
              Follows: fic.Follows,
              Characters: JSON.stringify(fic.Characters),
              Status: fic.Status,
            },
          }))
        )
      );
    }
    return Promise.all(batches);
  }

  // Get the embedder pipeline. When called for the first time,
  // this will load the pipeline and cache it for future use
  const embedder = await PipelineSingleton.getEmbedder();
  const pineconeIndex = PipelineSingleton.getPineconeIndex();

  const vectors = [];
  for (const fic of data) {
    // Actually perform the embedding
    const result = await embedder(fic.summary, {
      pooling: "mean",
      normalize: true,
    });
    // array containing the elements of the result.data tensor
    vectors.push(Object.entries(result.data).map(([, value]) => value));
  }
  console.log("Embedding done!");
  // Upsert the embedding to Pinecone
  await batchUpsert(data, vectors, 500, pineconeIndex)
    .then(() => {
      console.log("Upserted");
    })
    .catch((error) => {
      console.error(error);
    });

  return NextResponse.json({ success: true }, { status: 200 });
}
