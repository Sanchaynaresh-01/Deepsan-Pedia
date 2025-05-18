import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Layers } from 'lucide-react';

interface OverlapResult {
  common: string[];
  unique_to_you: string[];
  unique_to_friend: string[];
}

interface OverlapSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: OverlapResult | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const OverlapSection: React.FC<OverlapSectionProps> = ({
  userInput,
  setUserInput,
  recommendations,
  loading,
  handleSubmit
}) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Layers className="mr-2 h-7 w-7 text-purple-400" />
          Overlap Comparison
        </h2>
        <p className="text-gray-300">
          Compare your interests with a friend to find common ground.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter your list and your friend's list (e.g., you: item1, item2; friend: item2, item3)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-3 mb-2">
            <div className="flex items-center justify-center p-4">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-800"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-black bg-opacity-30 px-4 text-lg text-purple-300">Comparison Results</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold text-white mb-4 text-center">You Only</h3>
            <ul className="space-y-2">
              {recommendations.unique_to_you.map((item, i) => (
                <li key={i} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="border-green-500 border-opacity-30">
            <h3 className="text-xl font-bold text-green-300 mb-4 text-center">Common Interests</h3>
            <ul className="space-y-2">
              {recommendations.common.map((item, i) => (
                <li key={i} className="text-green-200 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Friend Only</h3>
            <ul className="space-y-2">
              {recommendations.unique_to_friend.map((item, i) => (
                <li key={i} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Layers className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No comparison yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter your lists above to see what you have in common with your friend.
          </p>
        </div>
      )}
    </div>
  );
};

export default OverlapSection;