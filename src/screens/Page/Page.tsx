import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Page = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-gray-50 w-full max-w-sm mx-auto">
      {/* Status bar space */}
      <div className="h-12 bg-white"></div>
      
      {/* Header */}
      <header className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-center">
          <Card className="bg-gray-100 rounded-xl w-16 h-16 flex items-center justify-center">
            <CardContent className="p-2 flex items-center justify-center">
              <img className="w-full h-full" alt="Boss logo" src="/boss-logo.svg" />
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Hoş Geldiniz</h1>
          <p className="text-gray-600">Mobil uygulamanız hazır!</p>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <nav className="bg-white border-t border-gray-200 px-4 py-2 mt-auto">
        <div className="flex justify-around items-center h-12">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
            <span className="text-xs text-gray-600">Ana Sayfa</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span className="text-xs text-gray-400">Diğer</span>
          </div>
        </div>
      </nav>
    </main>
  );
};
