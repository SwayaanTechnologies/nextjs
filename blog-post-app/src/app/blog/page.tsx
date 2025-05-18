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



import Link from 'next/link';

export default function BlogList() {

  return (
    <>
      <h1>Blog List</h1>
      <Link href="/">Home</Link>
    </>
  );
}