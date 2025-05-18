import React from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import { Activity } from 'lucide-react';

interface ActivitiesSectionProps {
  userInput: string;
  setUserInput: (input: string) => void;
  recommendations: string[] | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
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
          <Activity className="mr-2 h-7 w-7 text-purple-400" />
          Activity Recommendations
        </h2>
        <p className="text-gray-300">
          Discover creative activities based on your interests.
        </p>
      </div>

      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        placeholder="Enter a category (e.g., outdoor, indoor, creative, social)"
        loading={loading}
      />

      {loading ? (
        <LoadingSpinner />
      ) : recommendations ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((activity, index) => (
            <Card 
              key={index} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col justify-center items-center p-6 text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <p className="text-lg text-white">{activity}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-24 h-24 mb-6 opacity-30">
            <Activity className="w-full h-full text-purple-300" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No recommendations yet</h3>
          <p className="text-gray-400 max-w-md">
            Enter a category above to discover creative activity ideas tailored to your interests.
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivitiesSection;