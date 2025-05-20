import DataDisplay from '@/components/DataDisplay';

export default function DataPage() {
  return (
    <main className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">All Fetched Data</h1>
      <DataDisplay />
    </main>
  );
}
