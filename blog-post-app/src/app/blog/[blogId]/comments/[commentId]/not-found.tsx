// app/blog/[blogId]/comments/[commentId]/not-found.tsx

'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split('/');

  const blogId = segments[2];
  const commentId = segments[4];

    return (
        <div>
        <h2>Comment Not Found</h2>
        <p>Could not find comment {commentId} for blog {blogId}.</p>
        </div>
    );
}