// // app/blog/[blogId]/page.tsx

// type Params = {
//   params: Promise<{
//     blogId: string;
//   }>;
// };

// export default async function BlogDetails({ params }: Params) {
//   const { blogId } = await params;

//   return <h1>Details about Blog {blogId}</h1>;
// }





// export default async function BlogDetails({ params } : { params : { blogId: string } }) {
//   const { blogId } = await params;
//   return <h1>Details about Blog {blogId}</h1>;
// }





// app/blog/[blogId]/page.tsx

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { blogId: '1' },
    { blogId: '2' },
    { blogId: '3' },
  ];
}

export default async function BlogPostPage({ 
  params,
 }: { 
  params: Promise<{ blogId: string }>; 
}) {
  const { blogId } = await params;
  return (
    <h1>Blog {blogId} details at {new Date().toLocaleTimeString()}</h1>
  );
}



// app/blog/[blogId]/page.tsx
// import { Metadata } from 'next';

// type Props = {
//   params: { blogId: string };
// };

// export default async function BlogDetails({ params } : { params : { blogId: string } }) {
//   const { blogId } = await params;
//   return <h1>Details about Blog {blogId}</h1>;
// }


// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { blogId } = await params;

//   // Simulate fetching data
//   const title = await new Promise((resolve) => {
//     setTimeout(() => resolve(`Blog Post ${blogId}`), 100);
//   });

//   return {
//     title: `Blog | ${title}`,
//   };
// }