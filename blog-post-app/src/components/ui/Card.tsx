type CardProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Card({ children, className = '' }: CardProps) {
    return (
      // <div className={`border rounded-md p-4 shadow-sm bg-white ${className}`}>
      //   {children}
      // </div>
      <>
  {/* Browse Blogs */}
  <section className={`bg-green-50 px-4 py-10 ${className}`}>
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Blog
        {children}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blog Item 1 */}
        <div className="bg-white rounded-xl shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">Due: 2025-03-10</div>
              <h3 className="text-xl font-bold">HTML</h3>
            </div>
            <div className="mb-5">
              Master the basics of HTML, including elements, attributes, and
              page structuring.
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-orange-700 mb-3">
                <h3 className="text-green-500 mb-2">Status: In Progress</h3>
              </div>
              <a
                href="Blog.html"
                className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Blog Item 2 */}
        <div className="bg-white rounded-xl shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">Due: 2025-03-15</div>
              <h3 className="text-xl font-bold">Next JS</h3>
            </div>
            <div className="mb-5">
              Explore Next.js fundamentals, including components, directives,
              and state management.
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-orange-700 mb-3">
                <h3 className="text-green-500 mb-2">Status: Draft</h3>
              </div>
              <a
                href="Blog.html"
                className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Blog Item 3 */}
        <div className="bg-white rounded-xl shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">Due: 2025-03-20</div>
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>
            <div className="mb-5">
              Deep dive into JavaScript ES6+ features, asynchronous programming,
              and DOM manipulation.
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-orange-700 mb-3">
                <h3 className="text-green-500 mb-2">Status: Published</h3>
              </div>
              <a
                href="Blog.html"
                className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    );
  }
  