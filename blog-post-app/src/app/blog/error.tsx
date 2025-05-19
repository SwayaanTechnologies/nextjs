
// File: app/blog/[blogId]/comments/[commentId]/error.tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="text-red-600 p-4">
      <p>{error.message}</p>
      <button onClick={handleRetry} className="mt-2 text-blue-600 underline">
        Try again
      </button>
    </div>
  );
}