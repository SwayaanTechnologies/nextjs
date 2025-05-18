import Link from 'next/link';
import Card from '@/components/ui/Card';
import { Post } from '@/lib/posts';

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-gray-800">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mt-2">{post.content.slice(0, 80)}...</p>
    </Card>
  );
}
