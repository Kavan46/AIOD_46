import { LucideIcon } from 'lucide-react';

export interface AppInfo {
  name: string;
  logo: string;
  url: string;
}

export interface Category {
  title: string;
  icon: LucideIcon;
  apps: AppInfo[];
}