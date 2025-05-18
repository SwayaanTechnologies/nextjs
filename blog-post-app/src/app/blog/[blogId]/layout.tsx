// app/blog/[blogId]/layout.tsx
export default function BlogDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <h2>Featured Blogs</h2>
        {children}
      </>
    );
  }