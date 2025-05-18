import React, { useState, useEffect } from 'react';
import { Book, Activity, Compass, Gift, Home, List, Film, Utensils, Heart, Shirt } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BooksSection from './sections/BooksSection';
import ActivitiesSection from './sections/ActivitiesSection';
import MoviesSection from './sections/MoviesSection';
import WishlistSection from './sections/WishlistSection';
import RestaurantsSection from './sections/RestaurantsSection';
import TravelSection from './sections/TravelSection';
import SwipeSection from './sections/SwipeSection';
import GiftsSection from './sections/GiftsSection';
import OverlapSection from './sections/OverlapSection';
import OutfitSection from './sections/OutfitSection';
import { generateRecommendations } from './utils/api';

export type Section = 'books' | 'activities' | 'movies' | 'wishlist' | 'restaurants' | 'travel' | 'swipe' | 'gifts' | 'overlap' | 'outfit';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('books');
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setUserInput('');
    setRecommendations(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await generateRecommendations(activeSection, userInput);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to generate recommendations. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'books':
        return <BooksSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'activities':
        return <ActivitiesSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'movies':
        return <MoviesSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'wishlist':
        return <WishlistSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'restaurants':
        return <RestaurantsSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'travel':
        return <TravelSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'swipe':
        return <SwipeSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'gifts':
        return <GiftsSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'overlap':
        return <OverlapSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      case 'outfit':
        return <OutfitSection userInput={userInput} setUserInput={setUserInput} recommendations={recommendations} loading={loading} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-100">
              {error}
            </div>
          )}
          <div className="animate-fadeIn">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;