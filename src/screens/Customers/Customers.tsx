import React, { useState } from 'react';
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const customers = [
    { 
      id: '1', 
      name: 'Ahmet Yılmaz', 
      email: 'ahmet@email.com', 
      phone: '+90 532 123 4567',
      totalDebt: 2500,
      totalCredit: 0,
      lastTransaction: '2025-01-15'
    },
    { 
      id: '2', 
      name: 'Fatma Kaya', 
      email: 'fatma@email.com', 
      phone: '+90 533 987 6543',
      totalDebt: 0,
      totalCredit: 1200,
      lastTransaction: '2025-01-14'
    },
    { 
      id: '3', 
      name: 'Mehmet Demir', 
      email: 'mehmet@email.com', 
      phone: '+90 534 456 7890',
      totalDebt: 850,
      totalCredit: 300,
      lastTransaction: '2025-01-12'
    },
    { 
      id: '4', 
      name: 'Ayşe Öztürk', 
      email: 'ayse@email.com', 
      phone: '+90 535 321 0987',
      totalDebt: 0,
      totalCredit: 0,
      lastTransaction: '2025-01-10'
    },
    { 
      id: '5', 
      name: 'Ali Çelik', 
      email: 'ali@email.com', 
      phone: '+90 536 654 3210',
      totalDebt: 1750,
      totalCredit: 0,
      lastTransaction: '2025-01-08'
    },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalDebt = customers.reduce((sum, customer) => sum + customer.totalDebt, 0);
  const totalCredit = customers.reduce((sum, customer) => sum + customer.totalCredit, 0);

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <UserIcon className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 mb-1">Müşteri</p>
              <p className="text-sm font-bold text-blue-600">{customers.length}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-red-600 font-bold text-xs">₺</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Alacak</p>
              <p className="text-sm font-bold text-red-600">₺{totalDebt.toLocaleString()}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-3 text-center">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold text-xs">₺</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Borç</p>
              <p className="text-sm font-bold text-green-600">₺{totalCredit.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Müşteriler</h2>
          <Button variant="primary" size="sm">
            <PlusIcon className="w-4 h-4 mr-1" />
            Yeni Müşteri
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Müşteri ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Customers List */}
        <div className="space-y-3">
          {filteredCustomers.map((customer) => (
            <Card key={customer.id} className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {customer.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                      <p className="text-sm text-gray-500">Son işlem: {customer.lastTransaction}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {customer.totalDebt > 0 && (
                      <p className="text-sm font-semibold text-red-600">
                        Alacak: ₺{customer.totalDebt.toLocaleString()}
                      </p>
                    )}
                    {customer.totalCredit > 0 && (
                      <p className="text-sm font-semibold text-green-600">
                        Borç: ₺{customer.totalCredit.toLocaleString()}
                      </p>
                    )}
                    {customer.totalDebt === 0 && customer.totalCredit === 0 && (
                      <p className="text-sm text-gray-500">Bakiye: ₺0</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <PhoneIcon className="w-4 h-4" />
                    <span>{customer.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};