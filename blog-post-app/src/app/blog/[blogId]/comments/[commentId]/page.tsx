// app/blog/[blogId]/comments/[commentId]/page.tsx

import { notFound } from "next/navigation";

type Params = {
  params: {
    blogId: string;
    commentId: string;
  };
};

export default async function CommentDetails({ params }: Params) {
  const { blogId, commentId } = await params;
 
  if (Number(commentId) > 1000) {
    notFound();
  }
  return <h1>Details about Comment {commentId} on Blog {blogId}</h1>;
}