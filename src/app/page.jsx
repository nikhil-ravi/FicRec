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
      <input
        type="text"
        className="block w-full px-0 py-2 my-2 text-lg bg-transparent border-0 border-b-2 appearance-none text-white-900 border-slate-500 dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
        placeholder="Enter search text here..."
        onInput={(e) => {
          recommend(e.target.value);
        }}
        autoFocus
      />
      {ready !== null &&
        (!ready || !result ? (
          "Loading..."
        ) : (
          <div className="flex flex-col gap-2">
            {result.map((fic) => (
              <Fic key={fic.id} fic={fic} />
            ))}
          </div>
        ))}
    </main>
  );
}
