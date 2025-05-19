// File: app/complex-dashboard/@notifications/page.tsx

// export default function Notifications() {
//   return <div>Notifications</div>;
// }

import Link from 'next/link';

export default function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
      <Link href="/complex-dashboard/archived">Go to Archived</Link>
    </div>
  );
}