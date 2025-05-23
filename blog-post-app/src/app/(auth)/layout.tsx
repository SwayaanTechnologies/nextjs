// app/(auth)/layout.tsx
// export default function AuthLayout({ children }: { children: React.ReactNode }) {
//     return (
//       <>
//         {children}
//         <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
//           <p>Footer</p>
//         </footer>
//       </>
//     );
//   }





// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const navLinks = [
//   { name: 'Register', href: '/register' },
//   { name: 'Login', href: '/login' },
//   { name: 'Forgot Password', href: '/forgot-password' },
// ];

// export default function AuthLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   return (
//     <>
//       <nav className="mb-4">
//         {navLinks.map((link) => {
//           const isActive =
//             pathname === link.href ||
//             (pathname.startsWith(link.href) && link.href !== '/');

//           return (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </nav>
//       {children}
//     </>
//   );
// }





'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  return (
    <>
        <nav className="mb-4">
          <Link href="/login">Login</Link> <br />
          <Link href="/register">Register</Link> <br /> 
          <Link href="/forgot-password">Forgot Password</Link>
        </nav>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
    </>
  );
}