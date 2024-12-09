export interface SearchResult {
  name: string;
  logo: string;
  url: string;
  category: string;
  rating: number;
  price: string;
  deliveryTime?: string;
  minOrder?: string;
  matchedItems?: string[];
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface CompareSectionProps {
  onSearchResults: (results: Array<{ name: string; price: string }>) => void;
}