import React from 'react';
import { 
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '../../components/ui/card';

export const Settings: React.FC = () => {
  const settingsGroups = [
    {
      title: 'Hesap',
      items: [
        { icon: UserIcon, label: 'Profil Bilgileri', description: 'Ad, email ve telefon', action: 'profile' },
        { icon: ShieldCheckIcon, label: 'Güvenlik', description: 'Şifre ve güvenlik ayarları', action: 'security' },
        { icon: BellIcon, label: 'Bildirimler', description: 'Push ve email bildirimleri', action: 'notifications' },
      ]
    },
    {
      title: 'İş Ayarları',
      items: [
        { icon: CurrencyDollarIcon, label: 'Para Birimi', description: 'TL, USD, EUR', action: 'currency' },
        { icon: DocumentTextIcon, label: 'Fatura Ayarları', description: 'Logo, imza ve şablon', action: 'invoice' },
      ]
    },
    {
      title: 'Destek',
      items: [
        { icon: QuestionMarkCircleIcon, label: 'Yardım Merkezi', description: 'SSS ve rehberler', action: 'help' },
        { icon: DocumentTextIcon, label: 'Gizlilik Politikası', description: 'Veri kullanımı', action: 'privacy' },
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Profile Header */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Ahmet Yılmaz</h2>
                <p className="text-sm text-gray-600">ahmet@example.com</p>
                <p className="text-xs text-gray-500 mt-1">Premium Plan • 15 gün kaldı</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
              {group.title}
            </h3>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {group.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors ${
                      itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* App Info */}
        <Card className="border-0 shadow-sm mb-6">
          <CardContent className="p-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h3 className="font-semibold text-gray-900">Boss Muhasebe</h3>
              <p className="text-sm text-gray-600">Sürüm 1.0.0</p>
              <p className="text-xs text-gray-500">© 2025 Boss Yazılım</p>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center space-x-2 p-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="font-medium">Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
};