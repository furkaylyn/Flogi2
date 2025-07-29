import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { BottomNavigation } from './components/Layout/BottomNavigation';
import { Home } from './screens/Home/Home';
import { Transactions } from './screens/Transactions/Transactions';
import { Customers } from './screens/Customers/Customers';
import { Reports } from './screens/Reports/Reports';
import { Settings } from './screens/Settings/Settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const getPageTitle = () => {
    switch (activeTab) {
      case 'home': return 'Boss Muhasebe';
      case 'transactions': return 'İşlemler';
      case 'customers': return 'Müşteriler';
      case 'reports': return 'Raporlar';
      case 'settings': return 'Ayarlar';
      default: return 'Boss Muhasebe';
    }
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'transactions': return <Transactions />;
      case 'customers': return <Customers />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto flex flex-col">
      {/* Status Bar Space */}
      <div className="h-12 bg-white"></div>
      
      {/* Header */}
      <Header title={getPageTitle()} />
      
      {/* Main Content */}
      {renderActiveScreen()}
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;