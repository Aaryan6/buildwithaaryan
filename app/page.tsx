"use client";

import useStore from "@/lib/zustand";

export default function Home() {
  const name = useStore((state) => state.name);
  const bio = useStore((state) => state.bio);

  return (
    <main className="min-h-screen p-12">
      <h1 className="text-xl font-semibold">Home</h1>
      <div className="grid mt-6 gap-y-2">
        <span>Name: {name}</span>
        <span>Bio: {bio}</span>
      </div>
    </main>
  );
}
