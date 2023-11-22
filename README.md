# RecFic

Welcome to Fanfic Explorer, your go-to platform for discovering fanfics across various fandoms in a whole new way! This web application utilizes cutting-edge technology to provide you with personalized fanfiction recommendations based on your search prompts.

## How It Works

1. **Data Scraping:**
   We scraped metadata from fanfiction.net for a vast collection of fanfics across different fandoms (only ASOIAF for now, more coming soon), capturing key details about each story.

2. **Embedding Summaries:**
   Leveraging the capabilities of Hugging Face's transformers.js library, we utilized the Xenova/all-MiniLM-L6-v2 model to embed summaries for each fanfic. This process provides a concise representation of the story's essence, capturing as much as a summary can reveal.

3. **Pinecone Integration:**
   [Pinecone](https://www.pinecone.io/) serves as the backbone of our platform, functioning as a robust vector database. It empowers our system to execute queries that efficiently search for fanfics with similar content stored in the database.


4. **On-the-Fly Transformation:**
   When you enter a search prompt, the transformer model is downloaded once and stored in your browser cache. Subsequent use of the model occurs on-the-fly, directly in your browser. This design enables real-time and dynamic exploration of fanfiction without the need for repeated server-side processing, ensuring super-fast responses for an optimized user experience.

5. **Personalized Recommendations:**
   By querying Pinecone with the vectorized search text, we fetch the top 10 most relevant fanfics, tailored to your input.

## Technologies Used

- **Next.js:**
  The entire platform is built as a Next.js project, providing a seamless and responsive user experience.

- **Hugging Face's Transformers.js:**
  We harness the transformers.js library to run the embedding process directly in your browser, eliminating the need for external server calls.

- **Pinecone:**
  Pinecone serves as our backend for similarity search, ensuring fast and accurate recommendations.

## Getting Started

To explore the world of fanfics with RecFic, simply visit [RecFic](https://promptfic.nikhilravi.com) and start entering your prompts to discover a curated list of fanfics tailored to your preferences.

Feel free to explore, discover, and immerse yourself in the diverse universe of fanfiction with Fanfic Explorer! If you have any questions or feedback, don't hesitate to reach out.

Happy reading! 📚🌟
