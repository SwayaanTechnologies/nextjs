// // app/layout.tsx
// import "./globals.css"; // Import global styles
// import { Inter } from 'next/font/google';
// const inter = Inter({ weight: '400',
//   subsets: ['latin'] });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={inter.className}>
//       {/* 
//       <!-- If tailwindcss is not working, uncomment the following lines -->
//       <head>
//         <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
//             integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
//           />
//         <script src="https://unpkg.com/@tailwindcss/browser@4"></script>

//       </head> */}
//       <body>
//         <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
//           <p>Header</p>
//         </header>

//         {children}  {/* Page-specific content gets rendered here */}

//         <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
//           <p>Footer</p>
//         </footer>
//       </body>
//     </html>
//   );
// }




// // File: app/layout.tsx this will throw an error you’ll encounter the following error:

// Error: You're importing a component that needs createContext. This React hook only works in a client component.

// import './globals.css';
// import { createContext } from 'react';


// type Theme = {
//   colors: {
//     primary: string;
//     secondary: string;
//   };
// };

// const defaultTheme: Theme = {
//   colors: {
//     primary: '#0070f3',
//     secondary: '#666666',
//   },
// };

// const ThemeContext = createContext<Theme>(defaultTheme);

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeContext.Provider value={defaultTheme}>
//           {children}
//         </ThemeContext.Provider>
//       </body>
//     </html>
//   );
// }




// File: app/layout.tsx

import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}