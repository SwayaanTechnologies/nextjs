// src/components/ClientComponentOne.tsx
'use client';

// import { useState } from 'react';
import ClientComponentTwo from './ClientComponentTwo';
// import { ServerComponentOne } from './ServerComponentOne';

export default function ClientComponentOne({ children }: { children?: React.ReactNode }) {
  // const [name] = useState('Batman');
  return (
    <>
      <h1>Client Component One </h1>
      {/* Client Component inside Client Component */}


      <ClientComponentTwo />
      { /* Server Inside Client */ }
      {/* <ServerComponentOne /> */}
      {/* Server Component inside Client Component will throw an error, because server component renders 
      first and cannot be interleaved with client components */}

      
      {children}
    </>
  );
}
