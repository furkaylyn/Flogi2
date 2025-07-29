import React, { useState } from 'react';
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');
  
  const monthlyData = [
    { month: 'Ocak', income: 45230, expense: 23150 },
    { month: 'Şubat', income: 52100, expense: 28900 },
    { month: 'Mart', income: 48750, expense: 25600 },
    { month: 'Nisan', income: 55200, expense: 31200 },
    { month: 'Mayıs', income: 49800, expense: 27800 },
    { month: 'Haziran', income: 58900, expense: 33100 },
  ];

  const categoryData = [
    { category: 'Satış', amount: 45230, percentage: 65, color: 'bg-blue-500' },
    { category: 'Hizmet', amount: 18500, percentage: 27, color: 'bg-green-500' },
    { category: 'Diğer', amount: 5570, percentage: 8, color: 'bg-purple-500' },
  ];

  const expenseCategories = [
    { category: 'Kira', amount: 8500, percentage: 37, color: 'bg-red-500' },
    { category: 'Faturalar', amount: 4200, percentage: 18, color: 'bg-orange-500' },
    { category: 'Malzeme', amount: 6800, percentage: 29, color: 'bg-yellow-500' },
    { category: 'Diğer', amount: 3650, percentage: 16, color: 'bg-gray-500' },
  ];

  const currentMonthIncome = 69300;
  const currentMonthExpense = 23150;
  const previousMonthIncome = 58900;
  const previousMonthExpense = 21800;

  const incomeChange = ((currentMonthIncome - previousMonthIncome) / previousMonthIncome * 100).toFixed(1);
  const expenseChange = ((currentMonthExpense - previousMonthExpense) / previousMonthExpense * 100).toFixed(1);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Period Selector */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Raporlar</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant={selectedPeriod === 'week' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('week')}
            >
              Hafta
            </Button>
            <Button
              variant={selectedPeriod === 'month' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('month')}
            >
              Ay
            </Button>
            <Button
              variant={selectedPeriod === 'year' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('year')}
            >
              Yıl
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Bu Ay Gelir</span>
                </div>
                <span className={`text-xs font-medium ${
                  parseFloat(incomeChange) > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {parseFloat(incomeChange) > 0 ? '+' : ''}{incomeChange}%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">₺{currentMonthIncome.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Geçen ay: ₺{previousMonthIncome.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <ArrowTrendingDownIcon className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-gray-600">Bu Ay Gider</span>
                </div>
                <span className={`text-xs font-medium ${
                  parseFloat(expenseChange) > 0 ? 'text-red-600' : 'text-green-600'
                }`}>
                  {parseFloat(expenseChange) > 0 ? '+' : ''}{expenseChange}%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">₺{currentMonthExpense.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Geçen ay: ₺{previousMonthExpense.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Chart */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Aylık Trend</h3>
              <ChartBarIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {monthlyData.slice(-3).map((data, index) => {
                const maxAmount = Math.max(...monthlyData.map(d => Math.max(d.income, d.expense)));
                const incomeWidth = (data.income / maxAmount) * 100;
                const expenseWidth = (data.expense / maxAmount) * 100;
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{data.month}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-green-600">₺{data.income.toLocaleString()}</span>
                        <span className="text-red-600">₺{data.expense.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${incomeWidth}%` }}
                        ></div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${expenseWidth}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Income Categories */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Gelir Kategorileri</h3>
            <div className="space-y-3">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium text-gray-700">{category.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₺{category.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Gider Kategorileri</h3>
            <div className="space-y-3">
              {expenseCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium text-gray-700">{category.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">₺{category.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};