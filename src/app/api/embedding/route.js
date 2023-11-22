import { NextResponse } from "next/server";
import PipelineSingleton from "@/lib/embedding";

export async function GET(request) {
  const text = request.nextUrl.searchParams.get("text");
  if (!text) {
    return NextResponse.json(
      {
        error: "Missing text parameter",
      },
      { status: 400 }
    );
  }
  // Get the classification pipeline. When called for the first time,
  // this will load the pipeline and cache it for future use.
  const embedder = await PipelineSingleton.getEmbedder();
  const pineconeIndex = PipelineSingleton.getPineconeIndex();

  // Actually perform the classification
  const result = await embedder(text, { pooling: "mean", normalize: true });
  // array containing the elements of the result.data tensor
  const vector = Object.entries(result.data).map(([, value]) => value);

  // Upsert the embedding to Pinecone
  const queryResponse = await pineconeIndex.query({
    vector,
    topK: 10,
    includeMetadata: true,
  });
  return NextResponse.json(queryResponse);
}
