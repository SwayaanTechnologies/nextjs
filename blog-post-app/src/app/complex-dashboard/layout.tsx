// File: app/complex-dashboard/layout.tsx

// Make sure the Card component exists at this path, or update the path if necessary
// import Card from '../../components/Card';

// export default function ComplexDashboard({
//   users,
//   revenue,
//   notifications,
// }: {
//   users: React.ReactNode;
//   revenue: React.ReactNode;
//   notifications: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h1>Complex Dashboard</h1>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <Card>{users}</Card>
//         <Card>{revenue}</Card>
//         <Card>{notifications}</Card>
//       </div>
//     </div>
//   );
// }

// File: app/complex-dashboard/layout.tsx

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: Props) {
  const isLoggedIn = false; // simulate login check

  if (!isLoggedIn) {
    return <>{login}</>; // Show login slot
  }

  return (
    <div className="dashboard">
      <h1>Complex Dashboard</h1>
      <div className="cards">
        {children}
        {users}
        {revenue}
        {notifications}
      </div>
    </div>
  );
}