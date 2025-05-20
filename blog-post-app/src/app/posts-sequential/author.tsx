// app/posts-sequential/author.tsx
type AuthorProps = {
  userId: number;
};

type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: AuthorProps) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const author: Author = await response.json();

  return <span>{author.name}</span>;
}