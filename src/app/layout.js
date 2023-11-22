import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeProvider";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FicRec",
  description:
    "FicRec is a fanfiction recommendation engine that uses a neural network to embed search queries and fanfiction summaries into a common vector space. Given a search query, FicRec will return a list of fanfictions that are semantically similar to the query.",
  author: "Nikhil Ravi",
  keywords:
    "data-science, machine-learning, deep-learning, nextjs, scraping, recommendation-engine, fanfiction, similarity-search, text-embedding, vector-database, huggingface-transformers, pineconedb, transformers.js",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <head />
        <body className={`bg-white dark:bg-darkPrimary ${inter.className}`}>
          <NavigationBar />
          <main>
            <section className="pageTop min-h-screen">{children}</section>
          </main>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}
