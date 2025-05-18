import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Film, Star } from 'lucide-react';

interface MovieRecommendation {
  title: string;
  year: number;
  tagline: string;
  rating: number;
}

interface MoviesSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: MovieRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({
  userInput,
  setUserInput,
  recommendations,
  loading,
  handleSubmit
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 10 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" />);
    }

    return stars;
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Film className="mr-2 h-7 w-7 text-purple-400" />
          Movie Recommendations
        </h2>
        <p className="text-gray-300">
          Find your next favorite film based on genre preferences.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a genre (e.g., action, drama, comedy)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((movie, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                  <span className="text-gray-400">{movie.year}</span>
                </div>
                <p className="text-gray-300 italic mb-4 flex-grow">"{movie.tagline}"</p>
                <div className="mt-auto">
                  <div className="flex items-center border-t border-purple-800 pt-3">
                    <span className="text-yellow-400 mr-2 font-medium">{movie.rating.toFixed(1)}</span>
                    <div className="flex">
                      {renderStars(movie.rating)}
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
            <Film className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a genre above to discover personalized movie recommendations tailored to your interests.
          </p>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;