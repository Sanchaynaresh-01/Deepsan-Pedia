import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { List, Check } from 'lucide-react';

interface WishlistSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: string[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const WishlistSection: React.FC<WishlistSectionProps> = ({
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
          <List className="mr-2 h-7 w-7 text-purple-400" />
          Wishlist Recommendations
        </h2>
        <p className="text-gray-300">
          Discover items to add to your wishlist based on your interests.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a category (e.g., tech, home, fashion, hobbies)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((item, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center">
                    <Check className="w-4 h-4 text-purple-300" />
                  </div>
                </div>
                <p className="text-white text-lg">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <List className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a category above to discover wishlist items tailored to your interests.
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;