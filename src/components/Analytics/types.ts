export type TimeFilterType = 'today' | 'yesterday' | 'week' | 'month';

export interface Order {
  id: string;
  appName: string;
  appLogo: string;
  amount: number;
  date: Date;
  status: 'Delivered' | 'In Progress';
  items?: string[];
}