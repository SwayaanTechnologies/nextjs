// app/interleaving/page.tsx
// import { ServerComponentOne } from '@/components/ServerComponentOne';
import ClientComponentOne from '@/components/ClientComponentOne';
 
export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>

      {/* Valid: Server inside Server */}
      {/* <ServerComponentOne /> */}

      {/* Valid: Client inside Client */}
      <ClientComponentOne />

    </>
  );
}