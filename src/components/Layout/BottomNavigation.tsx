import React from 'react';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  UsersIcon, 
  ChartBarIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  DocumentTextIcon as DocumentTextIconSolid, 
  UsersIcon as UsersIconSolid, 
  ChartBarIcon as ChartBarIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid 
} from '@heroicons/react/24/solid';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Ana Sayfa', icon: HomeIcon, activeIcon: HomeIconSolid },
    { id: 'transactions', label: 'İşlemler', icon: DocumentTextIcon, activeIcon: DocumentTextIconSolid },
    { id: 'customers', label: 'Müşteriler', icon: UsersIcon, activeIcon: UsersIconSolid },
    { id: 'reports', label: 'Raporlar', icon: ChartBarIcon, activeIcon: ChartBarIconSolid },
    { id: 'settings', label: 'Ayarlar', icon: Cog6ToothIcon, activeIcon: Cog6ToothIconSolid },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 px-2 py-1">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = activeTab === tab.id ? tab.activeIcon : tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};