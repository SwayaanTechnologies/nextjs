// import { Suspense } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: number) {
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}

async function getUserAlbums(userId: number) {
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {

  const userId = parseInt((await params).id, 10); // Get user ID from route params

  // Fetch both posts and albums in parallel
  const [posts, albums] = await Promise.all([
    getUserPosts(userId),
    getUserAlbums(userId)
  ]);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="font-semibold">Posts</h2>
        {posts.map((post: Post) => (
          <div key={post.id} className="mb-4">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="font-semibold">Albums</h2>
        {albums.map((album: Album) => (
          <div key={album.id} className="mb-4">
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}