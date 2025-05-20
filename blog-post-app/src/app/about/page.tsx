// export default function About() {
//   console.log("About Server Component");
//   return <h1>About Me</h1>;
// }


// import { useState } from 'react';

// export default function About() {
//   const [name, setName] = useState('');
//   console.log("About Server Component");
//   return <h1>About Me</h1>;
// }





// import { cookies } from 'next/headers';

// export default async function AboutPage() {
//      const cookieStore = await cookies();
//      const theme = cookieStore.get('theme');
//      console.log(theme);
//     return <h1>About Me</h1>; // Log the theme to verify the cookie's value
//    }




// app/about/page.tsx
// export const metadata = {
//   title: "About | Code Evolution",
// };

export default function About() {
  return <h1>About Me</h1>;
}