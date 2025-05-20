export const BlogComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  return <p>Blog post details...</p>;
}

