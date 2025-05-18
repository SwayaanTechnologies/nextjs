export type Post = {
    title: string;
    slug: string;
    content: string;
  };
  
  export const posts: Post[] = [
    {
      title: 'Getting Started with Next.js 15',
      slug: 'getting-started',
      content: 'Welcome to the world of Next.js 15 App Router!',
    },
    {
      title: 'Understanding React Server Components',
      slug: 'react-server-components',
      content: 'RSCs let you build fast and dynamic apps without shipping JS!',
    },
  ];
  