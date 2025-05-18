// app/(admin)/layout.tsx
import "../globals.css"; // Import global styles
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
          <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
            <p>Header</p>
          </header>
  
          {children}  {/* Page-specific content gets rendered here */}
  
          <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
            <p>Footer</p>
          </footer>
        </body>
      </html>
    );
  }