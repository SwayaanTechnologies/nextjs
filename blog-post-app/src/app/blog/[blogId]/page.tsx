// app/blog/[blogId]/page.tsx

// type Params = {
//     params: {
//       blogId: string;
//     };
//   };
  
  // export default async function BlogDetails({ params: { blogId } } : { params : { blogId: string}}) {
    
  //   return <h1>Details about Blog {blogId}</h1>;
  // }

export default async function BlogDetails({ params } : { params : { blogId: string } }) {
  const { blogId } = await params;
  return <h1>Details about Blog {blogId}</h1>;
}