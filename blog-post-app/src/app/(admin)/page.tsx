// Styling Example

// export default function Admin() {
//   return (
//     <h1 className="text-3xl font-bold text-center text-red-800">
//       Admin Page xyz
//     </h1>
//   )

//   }



// Navigating to blog and profile pages

import Link from 'next/link';

export default function Home() {
  const blogId = 100;
  return (

    <>
      <h1>
      Admin Page xyz
    </h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/profile">Profile</Link>
      <br />
      <h2>
      <Link href="/blog/1">Blog 1</Link>
      </h2>
      <h2>
      <Link href="/blog/2">Blog 2</Link>
      </h2>
      <h2>
        <Link href="/blog/3" replace>Blog 3</Link>
      </h2>
      <Link href={`/blog/${blogId}`}>Blog {blogId}</Link>
    </>
  );
}