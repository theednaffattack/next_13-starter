"use client";

import Link from "next/link";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <p>There was a problem</p>
      <p className="mt-4 text-3xl font-bold text-emerald-700 dark:text-emerald-500">
        {error.message || "Something went wrong."}
      </p>
      <p>Please try again or contact support if the problem persists.</p>
      <button
        type="button"
        onClick={reset}
        className="btn btn-blue"
        style={{
          backgroundColor: "lightblue",
          // border: "2px limegreen solid",
          borderRadius: "12px",
          padding: "12px",
        }}
      >
        Try again
      </button>{" "}
      <Link href="/" className="btn btn-blue">
        Go back home
      </Link>
    </main>
  );
}
