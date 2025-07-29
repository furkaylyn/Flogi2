import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  title: string;
  showNotifications?: boolean;
  showProfile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showNotifications = true, 
  showProfile = true 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          {showNotifications && (
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <BellIcon className="w-6 h-6" />
            </button>
          )}
          {showProfile && (
            <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
              <UserCircleIcon className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};