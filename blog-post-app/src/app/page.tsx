  export default function Home() {

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
  }

// app/page.tsx
// "use client";

// import Link from 'next/link';
// import { useState } from 'react';

// export default function HomePage() {
    // const [time] = useState(new Date().toLocaleTimeString());
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <Link href="/dashboard">Go to Dashboard</Link>
//             <Link href="/about">Go to About</Link>
            // <p>Current Time: {time}</p>
//         </div>
//     );
// }

export const metadata = {
  title: {
    absolute: "Blog | Application",
  },
};
