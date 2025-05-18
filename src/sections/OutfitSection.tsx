import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Shirt } from 'lucide-react';

interface OutfitEvaluation {
  comboScore: number;
  style_description: string;
  recommended_accessory: string;
}

interface OutfitSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: OutfitEvaluation | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const OutfitSection: React.FC<OutfitSectionProps> = ({
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
          <Shirt className="mr-2 h-7 w-7 text-purple-400" />
          Outfit Evaluation
        </h2>
        <p className="text-gray-300">
          Get feedback on your outfit combinations and style suggestions.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter outfit items (e.g., black jeans, white t-shirt, leather jacket)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="max-w-2xl mx-auto">
          <Card className="mb-6">
            <div className="flex flex-col items-center p-4">
              <h3 className="text-xl font-bold text-white mb-6">Style Score</h3>
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
                <div 
                  className="absolute inset-0 rounded-full border-8 border-transparent border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-indigo-500"
                  style={{ 
                    transform: `rotate(${recommendations.comboScore * 3.6}deg)`,
                    transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{recommendations.comboScore}</span>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-white mb-3">Style Analysis</h3>
              <p className="text-gray-300">{recommendations.style_description}</p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-white mb-3">Recommendation</h3>
              <p className="text-gray-300">{recommendations.recommended_accessory}</p>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Shirt className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No evaluation yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter your outfit items above to receive style feedback and suggestions.
          </p>
        </div>
      )}
    </div>
  );
};

export default OutfitSection;