export const CommentComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate a 4-second delay
  return <p>Comments...</p>;
}