"use client";
import { Input } from "@/components/ui/input";
import useStore from "@/lib/zustand";

export default function Profile() {
  const setName = useStore((state) => state.setName);
  const setBio = useStore((state) => state.setBio);
  const name = useStore((state) => state.name);
  const bio = useStore((state) => state.bio);

  return (
    <div className="max-w-sm mx-auto py-10 px-4">
      <h1 className="text-xl font-semibold">Details</h1>
      <div className="grid max-w-lg gap-y-4 mt-4">
        <Input
          type="text"
          placeholder="Name"
          className=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Bio"
          className=""
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </div>
  );
}
