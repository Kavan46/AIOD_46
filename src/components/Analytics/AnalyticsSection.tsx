import React from 'react';
import { History, ShoppingBag, Wallet, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { OrderHistory } from './OrderHistory';
import { StatisticsCard } from './StatisticsCard';
import { TimeFilter } from './TimeFilter';
import { useAnalytics } from '../../context/AnalyticsContext';
import { useTimeFilter } from './hooks/useTimeFilter';

function AnalyticsSection() {
  const { theme } = useTheme();
  const { orders, resetAnalytics } = useAnalytics();
  const { 
    timeFilter,
    setTimeFilter,
    filteredOrders,
    totalOrders,
    totalAmount,
    periodLabel
  } = useTimeFilter(orders);
  
  const isDark = theme === 'dark';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 px-4 pb-20">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Analytics
          </h1>
          <TimeFilter currentFilter={timeFilter} onFilterChange={setTimeFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatisticsCard
            icon={<ShoppingBag />}
            label={`${periodLabel} Orders`}
            value={totalOrders}
            color="purple"
          />
          <StatisticsCard
            icon={<Wallet />}
            label={`${periodLabel} Spent`}
            value={`₹${totalAmount.toLocaleString()}`}
            color="green"
          />
        </div>

        {filteredOrders.length > 0 && (
          <div className={`${
            isDark ? 'bg-white/10' : 'bg-white'
          } backdrop-blur-md rounded-xl p-4 transition-all duration-200`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-white/10' : 'bg-blue-100'
                }`}>
                  <History className={`w-5 h-5 ${
                    isDark ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                <h2 className={`text-lg font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Recent Orders
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className={`w-4 h-4 ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`} />
                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  {periodLabel}
                </span>
              </div>
            </div>
            <OrderHistory orders={filteredOrders} />
          </div>
        )}

        {filteredOrders.length === 0 && (
          <div className={`flex flex-col items-center justify-center py-12 ${
            isDark ? 'text-white/60' : 'text-gray-500'
          }`}>
            <Calendar className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No Orders {periodLabel}</p>
            <p className="text-sm text-center">
              Your order history for this period will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalyticsSection;