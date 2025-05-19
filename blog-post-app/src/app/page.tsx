  // export default function Home() {

  // return (
  //   <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  // )
  // }

// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/dashboard">Go to Dashboard</Link>
        </div>
    );
}