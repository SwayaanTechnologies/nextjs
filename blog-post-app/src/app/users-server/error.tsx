'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Error fetching users:', error);
  }, [error]);

  return (
    <div className="text-red-600 font-semibold p-4 border border-red-400 rounded bg-red-50">
      Error fetching users data.
    </div>
  );
}