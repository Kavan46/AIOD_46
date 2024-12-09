import { useState, useMemo } from 'react';
import { TimeFilterType, Order } from '../types';
import { 
  startOfDay, 
  endOfDay, 
  subDays, 
  startOfWeek, 
  endOfWeek, 
  startOfMonth, 
  endOfMonth 
} from '../../../utils/dateUtils';

export function useTimeFilter(orders: Order[]) {
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>('today');

  const { filteredOrders, totalOrders, totalAmount, periodLabel } = useMemo(() => {
    const now = new Date();
    let start: Date;
    let end: Date;
    let label: string;

    switch (timeFilter) {
      case 'today':
        start = startOfDay(now);
        end = endOfDay(now);
        label = "Today's";
        break;
      case 'yesterday':
        start = startOfDay(subDays(now, 1));
        end = endOfDay(subDays(now, 1));
        label = "Yesterday's";
        break;
      case 'week':
        start = startOfWeek(now);
        end = endOfWeek(now);
        label = "This Week's";
        break;
      case 'month':
        start = startOfMonth(now);
        end = endOfMonth(now);
        label = "This Month's";
        break;
      default:
        start = startOfDay(now);
        end = endOfDay(now);
        label = "Today's";
    }

    const filtered = orders.filter(order => {
      const orderDate = new Date(order.date);
      return orderDate >= start && orderDate <= end;
    });

    return {
      filteredOrders: filtered,
      totalOrders: filtered.length,
      totalAmount: filtered.reduce((sum, order) => sum + order.amount, 0),
      periodLabel: label
    };
  }, [orders, timeFilter]);

  return {
    timeFilter,
    setTimeFilter,
    filteredOrders,
    totalOrders,
    totalAmount,
    periodLabel
  };
}