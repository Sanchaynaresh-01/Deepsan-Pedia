import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Compass, Star } from 'lucide-react';

interface TravelRecommendation {
  location: string;
  short_description: string;
  star_rating: number;
}

interface TravelSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: TravelRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const TravelSection: React.FC<TravelSectionProps> = ({
  userInput,
  setUserInput,
  recommendations,
  loading,
  handleSubmit
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Compass className="mr-2 h-7 w-7 text-purple-400" />
          Travel Recommendations
        </h2>
        <p className="text-gray-300">
          Discover amazing destinations based on your preferred region.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a region (e.g., Europe, Asia, Caribbean)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((destination, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{destination.location}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{destination.short_description}</p>
                <div className="mt-auto">
                  <div className="flex items-center border-t border-purple-800 pt-3">
                    <div className="flex">
                      {renderStars(destination.star_rating)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Compass className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a region above to discover travel destinations tailored to your preferences.
          </p>
        </div>
      )}
    </div>
  );
};

export default TravelSection;