// File: app/global-error.tsx

'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-red-50 text-red-800">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Refresh
        </button>
      </body>
    </html>
  );
}