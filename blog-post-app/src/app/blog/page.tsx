// export default function BlogList() {
//     return (
//       <div>
//         <h1>Blog List</h1>
//         <h2>Blog 1</h2>
//         <h2>Blog 2</h2>
//         <h2>Blog 3</h2>
//       </div>
//     );
//   }



// import { posts } from '@/lib/posts';
// import PostPreview from '@/components/blog/PostPreview';

// export default function BlogIndexPage() {
//   return (
//     <div className="space-y-6">
//       {posts.map((post) => (
//         <PostPreview key={post.slug} post={post} />
//       ))}
//     </div>
//   );
// }



// import Link from 'next/link';

// export default function BlogList() {

//   return (
//     <>
//       <h1>Blog List</h1>
//       <Link href="/">Home</Link>
//     </>
//   );
// }




// export default async function BlogPage() {
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 sec delay
//   return <h1>Blog Page Content</h1>;
// }





// app/blog/page.tsx
// import Link from 'next/link';

// export default function BlogPage() {
//   return (
//     <div>
//       <h1>Featured Blog Posts</h1>
//       <ul>
//         <li><Link href="/blog/1">Blog Post 1</Link></li>
//         <li><Link href="/blog/2">Blog Post 2</Link></li>
//         <li><Link href="/blog/3">Blog Post 3</Link></li>
//       </ul>
//     </div>
//   );
// }










// app/blog/page.tsx
import { Suspense } from 'react';
import { BlogComponent } from '@/components/BlogComponent';
import { CommentComponent } from '@/components/CommentComponent';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Post</h1>
      <Suspense fallback={<p>Loading blog post...</p>}>
        <BlogComponent />
      </Suspense>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentComponent />
      </Suspense>
    </div>
  );
}