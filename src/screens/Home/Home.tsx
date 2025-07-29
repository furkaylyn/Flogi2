import React from 'react';
import { 
  PlusIcon, 
  ArrowUpIcon, 
  ArrowDownIcon,
  EyeIcon,
  DocumentTextIcon,
  UsersIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const Home: React.FC = () => {
  const quickStats = [
    { label: 'Toplam Gelir', value: '₺45,230', change: '+12%', color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Toplam Gider', value: '₺23,150', change: '-8%', color: 'text-red-600', bgColor: 'bg-red-50' },
    { label: 'Net Kar', value: '₺22,080', change: '+15%', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Bekleyen', value: '₺8,450', change: '+3%', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  ];

  const quickActions = [
    { label: 'Gelir Ekle', icon: ArrowUpIcon, color: 'bg-green-500', action: 'add-income' },
    { label: 'Gider Ekle', icon: ArrowDownIcon, color: 'bg-red-500', action: 'add-expense' },
    { label: 'Fatura Oluştur', icon: DocumentTextIcon, color: 'bg-blue-500', action: 'create-invoice' },
    { label: 'Müşteri Ekle', icon: UsersIcon, color: 'bg-purple-500', action: 'add-customer' },
  ];

  const recentTransactions = [
    { id: '1', type: 'income', description: 'Satış - Ahmet Yılmaz', amount: 1250, date: '2025-01-15' },
    { id: '2', type: 'expense', description: 'Ofis Kirası', amount: -2500, date: '2025-01-14' },
    { id: '3', type: 'income', description: 'Hizmet Bedeli', amount: 850, date: '2025-01-14' },
    { id: '4', type: 'expense', description: 'Elektrik Faturası', amount: -320, date: '2025-01-13' },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Quick Stats */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <EyeIcon className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                  <span className={`text-xs font-medium ${stat.color}`}>{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Hızlı İşlemler</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex-col space-y-2 border-gray-200 hover:border-gray-300"
              >
                <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Son İşlemler</h2>
            <Button variant="ghost" size="sm" className="text-blue-600">
              Tümünü Gör
            </Button>
          </div>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              {recentTransactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className={`flex items-center justify-between p-4 ${
                    index !== recentTransactions.length - 1 ? 'border-b border-gray-100' : ''
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
                      <p className="text-xs text-gray-500">{transaction.date}</p>
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
    </div>
  );
};