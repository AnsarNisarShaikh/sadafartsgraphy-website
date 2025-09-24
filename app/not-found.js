"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[500px] sm:min-h-screen flex items-center justify-center py-10 sm:py-20 bg-gray-950 text-white px-6">
      <div className="max-w-3xl text-center  ">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-400">404</h1>
        <p className="mt-4 text-xl sm:text-3xl text-gray-300">
          Oops — the page you&apos;re looking for can&apos;t be found.
        </p>

        <p className="mt-4 text-base text-gray-300">
          It may have been moved, renamed, or never existed. Try returning home or
          check the URL.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="cursor-pointer inline-flex items-center px-5 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:opacity-95 shadow"
          >
            Go to Homepage
          </Link>

          <button
            type="button"
            onClick={() => history.back()}
            className="cursor-pointer inline-flex border-gray-300 text-gray-300 items-center px-5 py-2 rounded-lg  border text-sm font-medium "
          >
            Go Back
          </button>
        </div>

      </div>
    </main>
  );
}
