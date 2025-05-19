// // app/blog/[blogId]/comments/[commentId]/page.tsx

// import { notFound } from "next/navigation";

// type Params = {
//   params: {
//     blogId: string;
//     commentId: string;
//   };
// };

// export default async function CommentDetails({ params }: Params) {
//   const { blogId, commentId } = await params;
 
//   if (Number(commentId) > 1000) {
//     notFound();
//   }
//   return <h1>Details about Comment {commentId} on Blog {blogId}</h1>;
// }






// File: app/blog/[blogId]/comments/[commentId]/page.tsx
// import { redirect } from 'next/navigation';

// export default async function BlogComment({
//   params,
// }: {
//    params: { blogId: string; commentId: string };
// }) {
//   const awaitedParams = await params;
//   const commentId = parseInt(awaitedParams.commentId);

//   if (commentId > 100) {
//     // Instead of showing a not-found page, redirect to blog list
//     redirect('/blog');
//   }

//   return (
//     <>
//       <h1>Blog Comment</h1>
//       <p>Comment ID: {commentId}</p>
//     </>
//   );
// }





function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function CommentPage() {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading comment");
  }

  return <h1>Comment Page</h1>;
}