// app/blog/[blogId]/layout.tsx
export default function BlogDetailsLayout({ children }: { children: React.ReactNode }) {
  
  if (Math.random() < 0.5) {
    throw new Error("Error loading blog");
  }
    return (
      <>
        <h2>Featured Blogs</h2>
        {children}
      </>
    );
  }
