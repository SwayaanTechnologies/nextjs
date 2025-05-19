// File: app/ErrorWrapper.tsx
'use client';

import { useState } from 'react';

export default function ErrorWrapper({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("Simulated error in root layout");
  }

  return (
    <div className="p-4 border">
      <button onClick={() => setError(true)} className="bg-red-500 text-white px-3 py-1 mb-4">
        Simulate Error
      </button>
      {children}
    </div>
  );
}