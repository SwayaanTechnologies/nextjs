// app/user-parallel/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="spinner-border animate-spin border-4 border-t-4 border-gray-600 rounded-full w-12 h-12"></div>
    </div>
  );
}