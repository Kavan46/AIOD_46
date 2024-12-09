import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { formatDate } from '../../utils/dateUtils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Order } from './types';

interface OrderHistoryProps {
  orders: Order[];
}

export function OrderHistory({ orders }: OrderHistoryProps) {
  const { theme } = useTheme();
  const [expandedOrder, setExpandedOrder] = React.useState<string | null>(null);
  const isDark = theme === 'dark';

  const toggleOrder = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="space-y-3">
      {orders.map((order, index) => (
        <div
          key={order.id}
          className={`rounded-lg transition-all duration-200 ${
            isDark ? 'bg-white/5' : 'bg-gray-50'
          }`}
          style={{
            animation: `fadeIn 0.3s ease-out ${index * 0.1}s both`
          }}
        >
          <div
            onClick={() => toggleOrder(order.id)}
            className={`flex items-center justify-between p-3 cursor-pointer ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-sm">
                <img
                  src={order.appLogo}
                  alt={order.appName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {order.appName}
                </h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  {formatDate(order.date)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ₹{order.amount.toLocaleString()}
                </p>
                <p className={`text-sm ${
                  order.status === 'Delivered' 
                    ? isDark ? 'text-green-400' : 'text-green-600'
                    : isDark ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  {order.status}
                </p>
              </div>
              {order.items && (
                <div className={`${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  {expandedOrder === order.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              )}
            </div>
          </div>
          
          {expandedOrder === order.id && order.items && (
            <div className={`px-4 pb-3 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              <div className={`pt-2 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <p className={`text-sm font-medium mb-2 ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  Order Items:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {order.items.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}