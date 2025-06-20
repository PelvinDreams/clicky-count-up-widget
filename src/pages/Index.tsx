
import Counter from '@/components/Counter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            React Counter App
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            A beautiful counter component built with React hooks and modern design
          </p>
        </div>
        
        <Counter />
        
        <div className="text-sm text-gray-500 max-w-lg mx-auto">
          This counter uses React's <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">useState</code> hook 
          to manage state and updates the count each time you click the button.
        </div>
      </div>
    </div>
  );
};

export default Index;
