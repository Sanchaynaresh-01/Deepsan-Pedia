import React, { useState } from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Heart, X, Check } from 'lucide-react';

interface SwipeRecommendation {
  itemName: string;
  reason: string;
}

interface SwipeSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: SwipeRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SwipeSection: React.FC<SwipeSectionProps> = ({
  userInput,
  setUserInput,
  recommendations,
  loading,
  handleSubmit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedItems, setSwipedItems] = useState<{[key: number]: 'like' | 'dislike'}>({});

  const handleSwipe = (index: number, direction: 'like' | 'dislike') => {
    setSwipedItems({...swipedItems, [index]: direction});
    
    // Move to next item after a short delay
    setTimeout(() => {
      if (index < (recommendations?.length || 0) - 1) {
        setCurrentIndex(index + 1);
      }
    }, 300);
  };

  const resetSwipes = () => {
    setCurrentIndex(0);
    setSwipedItems({});
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Heart className="mr-2 h-7 w-7 text-purple-400" />
          Swipe Recommendations
        </h2>
        <p className="text-gray-300">
          Discover new items based on your likes and dislikes.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter your likes and dislikes (e.g., like: minimalist, nature; dislike: bright colors, noise)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="flex flex-col items-center justify-center">
          {Object.keys(swipedItems).length === recommendations.length ? (
            <div className="text-center">
              <h3 className="text-xl font-medium text-white mb-4">You've swiped through all items!</h3>
              <button 
                onClick={resetSwipes}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
              >
                Start Over
              </button>
            </div>
          ) : (
            <div className="w-full max-w-md">
              {recommendations.map((item, index) => {
                // Only show current item
                if (index !== currentIndex) return null;
                
                const swipeStatus = swipedItems[index];
                
                return (
                  <div 
                    key={index}
                    className={`transition-all duration-300 transform ${
                      swipeStatus === 'like' ? 'translate-x-[200%] rotate-12 opacity-0' : 
                      swipeStatus === 'dislike' ? '-translate-x-[200%] -rotate-12 opacity-0' : ''
                    }`}
                  >
                    <Card className="relative overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white mb-3">{item.itemName}</h3>
                        <p className="text-gray-300 mb-6">{item.reason}</p>
                        
                        <div className="flex justify-center space-x-4 mt-4">
                          <button 
                            onClick={() => handleSwipe(index, 'dislike')}
                            className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={() => handleSwipe(index, 'like')}
                            className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full text-white transition-colors"
                          >
                            <Check className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
              
              <div className="mt-4 text-center text-gray-400">
                Item {currentIndex + 1} of {recommendations.length}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Heart className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter your preferences above to discover items tailored to your taste.
          </p>
        </div>
      )}
    </div>
  );
};

export default SwipeSection;