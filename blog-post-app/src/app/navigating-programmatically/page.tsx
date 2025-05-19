// File: app/navigating-programmatically/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function NavigateProgrammatically() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Navigating...');
    router.push('/'); // Navigate to homepage
  };

  return (
    <>
      <button onClick={handleClick}>Navigate Programmatically</button>
    </>
  );
}