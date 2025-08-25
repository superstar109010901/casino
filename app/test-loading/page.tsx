import ReduxLoadingTest from '@/components/examples/ReduxLoadingTest';

export default function TestLoadingPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Loading State Test Page</h1>
        <ReduxLoadingTest />
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4">How to Test:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Page Refresh (F5):</strong> Should show loading screen for 1.5 seconds</li>
            <li><strong>Navigation:</strong> Click between pages - should be instant, no loading</li>
            <li><strong>Manual Control:</strong> Use the buttons above to test loading states</li>
            <li><strong>State Reset:</strong> Use "Reset State" button to simulate fresh page load</li>
          </ol>
          
          <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> The loading screen will only show on the initial page load or when you manually reset the state. 
              Page navigation will be instant once the initial load is complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
