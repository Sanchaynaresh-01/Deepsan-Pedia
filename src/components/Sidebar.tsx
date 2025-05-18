import React from 'react';
import { Book, Activity, Compass, Gift, List, Film, Utensils, Heart, Shirt, Layers } from 'lucide-react';
import { Section } from '../App';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'books' as Section, icon: Book, label: 'Books' },
    { id: 'movies' as Section, icon: Film, label: 'Movies' },
    { id: 'activities' as Section, icon: Activity, label: 'Activities' },
    { id: 'restaurants' as Section, icon: Utensils, label: 'Restaurants' },
    { id: 'travel' as Section, icon: Compass, label: 'Travel' },
    { id: 'wishlist' as Section, icon: List, label: 'Wishlist' },
    { id: 'swipe' as Section, icon: Heart, label: 'Swipe' },
    { id: 'gifts' as Section, icon: Gift, label: 'Gifts' },
    { id: 'overlap' as Section, icon: Layers, label: 'Overlap' },
    { id: 'outfit' as Section, icon: Shirt, label: 'Outfit' },
  ];

  return (
    <aside className="w-16 md:w-64 bg-black bg-opacity-30 backdrop-blur-md border-r border-purple-900 border-opacity-30">
      <nav className="p-2 md:p-4">
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-700 bg-opacity-30 text-white border border-purple-500 border-opacity-50 shadow-lg shadow-purple-900/20'
                      : 'text-gray-300 hover:bg-purple-900 hover:bg-opacity-20'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-purple-300' : 'text-gray-400'}`} />
                  <span className={`ml-3 hidden md:block ${isActive ? 'font-medium' : ''}`}>
                    {section.label}
                  </span>
                  {isActive && (
                    <span className="ml-auto hidden md:block">
                      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;