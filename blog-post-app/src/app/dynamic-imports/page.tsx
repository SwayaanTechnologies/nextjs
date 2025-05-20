import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/components/DynamicComponent').then(mod => mod.default), {
  loading: () => <p>Loading Component...</p>,
//   ssr: false, // Optional: disable server-side render if purely client-side
});

export default function AnalyticsPage() {
  return (
    <div>
      <h1>Analytics</h1>
      <DynamicComponent />
    </div>
  );
}