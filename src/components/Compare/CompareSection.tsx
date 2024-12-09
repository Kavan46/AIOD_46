import React, { useState, useCallback, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { categories } from '../../data/categories';
import { productCategories } from '../../data/productCategories';
import { useTheme } from '../../context/ThemeContext';
import { CompareSectionProps, SearchResult } from './types';

const appDetails: Record<string, { 
  rating: number; 
  price: string;
  deliveryTime?: string;
  minOrder?: string;
}> = {
  'Swiggy': { rating: 4.2, price: '₹₹', deliveryTime: '30-45 min', minOrder: '₹50' },
  'Zomato': { rating: 4.3, price: '₹₹', deliveryTime: '35-50 min', minOrder: '₹100' },
  'Magicpin': { rating: 4.1, price: '₹₹', deliveryTime: '40-55 min', minOrder: '₹150' },
  'Ola': { rating: 4.2, price: '₹₹', deliveryTime: '35-50 min', minOrder: '₹100' },
  'Zepto': { rating: 4.4, price: '₹', deliveryTime: '10-15 min', minOrder: '₹99' },
  'Blinkit': { rating: 4.3, price: '₹', deliveryTime: '10-20 min', minOrder: '₹99' },
  'BigBasket': { rating: 4.2, price: '₹₹', deliveryTime: '2-3 hours', minOrder: '₹500' },
  'Milk Delight': { rating: 4.2, price: '₹', deliveryTime: '30-45 min', minOrder: '₹200' },
  'MedPlus': { rating: 4.1, price: '₹₹', deliveryTime: '60-90 min', minOrder: '₹200' },
  'Apollo 247': { rating: 4.3, price: '₹₹', deliveryTime: '45-60 min', minOrder: '₹100' },
  'PharmEasy': { rating: 4.2, price: '₹₹', deliveryTime: '60-90 min', minOrder: '₹150' },
  'MakeMyTrip': { rating: 4.1, price: '₹₹₹' },
  'RedBus': { rating: 4.2, price: '₹₹' },
  'Rapido': { rating: 4.0, price: '₹' },
  'Uber': { rating: 4.3, price: '₹₹' },
  'BookMyShow': { rating: 4.4, price: '₹₹' },
  'PVR': { rating: 4.3, price: '₹₹₹' },
};

function CompareSection({ onSearchResults }: CompareSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = useCallback((query: string) => {
    if (!query) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    categories.forEach(category => {
      const categoryProducts = productCategories[category.title] || [];
      const matchedProducts = categoryProducts.filter(product => 
        product.toLowerCase().includes(searchQuery)
      );

      category.apps.forEach(app => {
        if (app.name.toLowerCase().includes(searchQuery) || matchedProducts.length > 0) {
          searchResults.push({
            ...app,
            category: category.title,
            ...appDetails[app.name],
            matchedItems: matchedProducts.length > 0 ? matchedProducts : undefined
          });
        }
      });
    });

    setResults(searchResults);
  }, []);

  useEffect(() => {
    onSearchResults(
      results.map(result => ({
        name: result.name,
        price: result.price
      }))
    );
  }, [results, onSearchResults]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 px-4">
      <div className={`text-center mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h1 className="text-xl font-semibold mb-2">Compare & Find the Best Service</h1>
        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
          Search for any item or service to compare prices and delivery times across apps
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default CompareSection;