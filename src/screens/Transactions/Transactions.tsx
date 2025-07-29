import React, { useState } from 'react';
import { 
  PlusIcon, 
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const Transactions: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  
  const transactions = [
    { id: '1', type: 'income', description: 'Satış - Ahmet Yılmaz', category: 'Satış', amount: 1250, date: '2025-01-15' },
    { id: '2', type: 'expense', description: 'Ofis Kirası', category: 'Kira', amount: -2500, date: '2025-01-14' },
    { id: '3', type: 'income', description: 'Hizmet Bedeli - Fatma Kaya', category: 'Hizmet', amount: 850, date: '2025-01-14' },
    { id: '4', type: 'expense', description: 'Elektrik Faturası', category: 'Faturalar', amount: -320, date: '2025-01-13' },
    { id: '5', type: 'income', description: 'Ürün Satışı', category: 'Satış', amount: 2100, date: '2025-01-12' },
    { id: '6', type: 'expense', description: 'Yakıt Gideri', category: 'Ulaşım', amount: -180, date: '2025-01-12' },
    { id: '7', type: 'expense', description: 'Malzeme Alımı', category: 'Malzeme', amount: -750, date: '2025-01-11' },
    { id: '8', type: 'income', description: 'Danışmanlık Ücreti', category: 'Hizmet', amount: 1500, date: '2025-01-10' },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Summary Cards */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <ArrowUpIcon className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-xs text-gray-600 mb-1">Toplam Gelir</p>
              <p className="text-sm font-bold text-green-600">₺{totalIncome.toLocaleString()}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <ArrowDownIcon className="w-4 h-4 text-red-600" />
              </div>
              <p className="text-xs text-gray-600 mb-1">Toplam Gider</p>
              <p className="text-sm font-bold text-red-600">₺{totalExpense.toLocaleString()}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold text-sm">₺</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Net</p>
              <p className="text-sm font-bold text-blue-600">₺{(totalIncome - totalExpense).toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Tümü
            </Button>
            <Button
              variant={filter === 'income' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('income')}
            >
              Gelir
            </Button>
            <Button
              variant={filter === 'expense' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('expense')}
            >
              Gider
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <FunnelIcon className="w-4 h-4" />
            </Button>
            <Button variant="primary" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" />
              Ekle
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="İşlem ara..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Transactions List */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            {filteredTransactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className={`flex items-center justify-between p-4 ${
                  index !== filteredTransactions.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpIcon className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowDownIcon className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{transaction.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{transaction.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}₺{Math.abs(transaction.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};