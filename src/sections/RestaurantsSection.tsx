import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Utensils } from 'lucide-react';

interface RestaurantRecommendation {
  name: string;
  emoji: string;
  short_desc: string;
}

interface RestaurantsSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: RestaurantRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({
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
          <Utensils className="mr-2 h-7 w-7 text-purple-400" />
          Restaurant Recommendations
        </h2>
        <p className="text-gray-300">
          Discover delicious dining options based on cuisine preferences.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a cuisine (e.g., Italian, Japanese, Mexican)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((restaurant, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{restaurant.emoji}</span>
                  <h3 className="text-xl font-bold text-white">{restaurant.name}</h3>
                </div>
                <p className="text-gray-300 flex-grow">{restaurant.short_desc}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Utensils className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a cuisine above to discover restaurant recommendations tailored to your taste.
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantsSection;