import React, { createContext, useContext, useState, useEffect } from 'react';

interface Order {
  id: string;
  appName: string;
  appLogo: string;
  amount: number;
  date: Date;
  status: 'Delivered' | 'In Progress';
  items?: string[];
}

interface AnalyticsContextType {
  orders: Order[];
  totalOrders: number;
  totalAmount: number;
  addOrder: (order: Omit<Order, 'id'>) => void;
  resetAnalytics: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Load orders from localStorage
const loadOrdersFromStorage = (): Order[] => {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    const parsedOrders = JSON.parse(storedOrders);
    // Convert date strings back to Date objects
    return parsedOrders.map((order: any) => ({
      ...order,
      date: new Date(order.date)
    }));
  }
  return [];
};

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => loadOrdersFromStorage());

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const totalOrders = orders.length;
  const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

  const addOrder = (order: Omit<Order, 'id'>) => {
    const newOrder = {
      ...order,
      id: Math.random().toString(36).substr(2, 9)
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const resetAnalytics = () => {
    setOrders([]);
  };

  return (
    <AnalyticsContext.Provider value={{ 
      orders, 
      totalOrders, 
      totalAmount, 
      addOrder,
      resetAnalytics 
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}