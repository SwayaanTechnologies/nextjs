// File: app/articles/[articleId]/page.tsx
// import Link from 'next/link';

// export default async function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: { articleId: string };
//   searchParams: { language?: string };
// }) {
//   const { articleId } = await params;
//   const language = (await searchParams)?.language || 'English';

//   return (
//     <>
//       <h1>News Article: {articleId}</h1>
//       <p>Reading in: {language}</p>

//       <div className="mt-4">
//         <Link href={`/articles/${articleId}?language=en`}>English</Link> |{' '}
//         <Link href={`/articles/${articleId}?language=es`}>Spanish</Link> |{' '}
//         <Link href={`/articles/${articleId}?language=fr`}>French</Link>
//       </div>
//     </>
//   );
// }

'use client';

import { useParams, useSearchParams } from 'next/navigation';

export default function NewsClient() {
  const params = useParams();
  const searchParams = useSearchParams();

  const articleId = params.articleId;
  const language = searchParams.get('language') || 'English';

  return (
    <>
      <h1>News Article: {articleId}</h1>
      <p>Reading in: {language}</p>
    </>
  );
}