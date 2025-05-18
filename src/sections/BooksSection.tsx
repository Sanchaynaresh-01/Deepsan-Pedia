import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Book } from 'lucide-react';

interface BookRecommendation {
  title: string;
  author: string;
  summary: string;
  review: string;
}

interface BooksSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: BookRecommendation[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const bookBackgrounds = [
  'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
  'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
  'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
  'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg',
  'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg'
];

const BooksSection: React.FC<BooksSectionProps> = ({
  userInput,
  setUserInput,
  recommendations,
  loading,
  handleSubmit
}) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <div className="relative rounded-xl overflow-hidden mb-6">
          <img 
            src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg" 
            alt="Books Banner"
            className="w-full h-48 object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Book className="mr-2 h-7 w-7 text-purple-400" />
              Book Recommendations
            </h2>
            <p className="text-gray-300">
              Discover your next favorite read based on genre preferences.
            </p>
          </div>
        </div>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a genre (e.g., fantasy, mystery, sci-fi)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((book, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
              backgroundImage={bookBackgrounds[index % bookBackgrounds.length]}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">{book.title}</h3>
                <p className="text-purple-300 mb-3">by {book.author}</p>
                <p className="text-gray-300 mb-4 flex-grow">{book.summary}</p>
                <div className="mt-auto">
                  <p className="text-sm italic text-gray-400 border-t border-purple-800 pt-3">
                    "{book.review}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Book className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a genre above to discover personalized book recommendations tailored to your interests.
          </p>
        </div>
      )}
    </div>
  );
};

export default BooksSection;