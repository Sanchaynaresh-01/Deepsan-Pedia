import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Gift, Tag } from 'lucide-react';

interface GiftRecommendation {
  name: string;
  category: string;
  reason: string;
}

interface GiftsSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: GiftRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const GiftsSection: React.FC<GiftsSectionProps> = ({
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
          <Gift className="mr-2 h-7 w-7 text-purple-400" />
          Gift Recommendations
        </h2>
        <p className="text-gray-300">
          Discover perfect gift ideas for any occasion.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter occasion and tags (e.g., birthday, tech-lover, outdoorsy)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((gift, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{gift.name}</h3>
                <div className="flex items-center mb-3">
                  <Tag className="h-4 w-4 text-purple-400 mr-1" />
                  <span className="text-sm text-purple-300">{gift.category}</span>
                </div>
                <p className="text-gray-300 flex-grow">{gift.reason}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Gift className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter occasion and tags above to discover gift ideas tailored to your needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftsSection;