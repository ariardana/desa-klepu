import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    trend: 'up' | 'down';
  };
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
}

export default function StatCard({ title, value, icon, change, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center">
        <div className={`${colorClasses[color]} p-3 rounded-lg text-white`}>
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {change && (
              <span className={`ml-2 text-sm font-medium ${
                change.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {change.trend === 'up' ? '+' : ''}{change.value}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}