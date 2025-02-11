import { useState, useCallback } from 'react';

export const useSearch = (items, searchKeys) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    searchKeys.some(key =>
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return { searchTerm, setSearchTerm, filteredItems };
};