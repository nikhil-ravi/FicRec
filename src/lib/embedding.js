import { pipeline } from "@xenova/transformers";
import { Pinecone } from "@pinecone-database/pinecone";

// Use the Singleton pattern to enable lazy construction of the pipeline.
// NOTE: We wrap the class in a function to prevent code duplication (see below).
const P = () =>
  class PipelineSingleton {
    static task = "feature-extraction";
    static model = "Xenova/all-MiniLM-L6-v2";
    static embedder = null;
    static pinecone = null;
    static pineconeIndex = null;

    static async getEmbedder(progress_callback = null) {
      if (this.embedder === null) {
        this.embedder = pipeline(this.task, this.model, { progress_callback });
      }
      return this.embedder;
    }

    static getPineconeIndex() {
      if (this.pineconeIndex === null) {
        if (this.pinecone === null) {
          this.pinecone = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY,
            environment: process.env.PINECONE_ENVIRONMENT,
          });
        }
        this.pineconeIndex = this.pinecone.Index(
          process.env.PINECONE_INDEX_NAME
        );
      }
      return this.pineconeIndex;
    }
  };

let PipelineSingleton;
if (process.env.NODE_ENV !== "production") {
  // When running in development mode, attach the pipeline to the
  // global object so that it's preserved between hot reloads.
  // For more information, see https://vercel.com/guides/nextjs-prisma-postgres
  if (!global.PipelineSingleton) {
    global.PipelineSingleton = P();
  }
  PipelineSingleton = global.PipelineSingleton;
} else {
  PipelineSingleton = P();
}
export default PipelineSingleton;
