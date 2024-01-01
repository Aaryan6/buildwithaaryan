import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link href="/profile" className="text-gray-500 hover:text-gray-900">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
