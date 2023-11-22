"use client";

import Fic from "@/components/Fic";
import { useState } from "react";

export default function Home() {
  // Keep track of the recommendation result and the model loading status.
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(null);

  const recommend = async (text) => {
    if (!text) return;
    if (ready === null) setReady(false);

    // Make a request to the /embedding route on the server.
    const result = await fetch(
      `/api/embedding?text=${encodeURIComponent(text)}`
    );

    // If this is the first time we've made a request, set the ready flag.
    if (!ready) setReady(true);

    const json = await result.json();
    setResult(json.matches);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold mb-2 text-center">PromptFic</h1>
      <h2 className="text-2xl mb-4 text-center">
        Fanfiction recommendation engine
      </h2>
      <input
        type="text"
        className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4 text-black"
        placeholder="Enter text here"
        onInput={(e) => {
          recommend(e.target.value);
        }}
      />

      {ready !== null &&
        (!ready || !result ? (
          "Loading..."
        ) : (
          <div className="flex flex-col gap-2 max-w-screen-lg">
            {result.map((fic) => (
              <Fic key={fic.id} fic={fic} />
            ))}
          </div>
        ))}
    </main>
  );
}
