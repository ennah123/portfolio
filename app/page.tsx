export default function Home() {
  return (
    <div className="flex-1 p-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to the Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Card 1</h3>
            <p className="text-gray-600">Some content here</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Card 2</h3>
            <p className="text-gray-600">Some content here</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Card 3</h3>
            <p className="text-gray-600">Some content here</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
          <p className="text-gray-600">
            This is the main content area that will adjust based on screen size.
            On mobile, the sidebar is hidden by default and can be toggled.
          </p>
        </div>
      </div>
    </div>
  );
}
