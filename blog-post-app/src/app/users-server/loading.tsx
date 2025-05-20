// app/users-server/loading.tsx
export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      <span className="ml-4 text-gray-700 font-medium">Loading users...</span>
    </div>
  );
}