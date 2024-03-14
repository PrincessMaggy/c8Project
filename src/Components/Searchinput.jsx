import React from 'react';

const SearchInput = () => {
  return (
    <div className="absolute inset-x-3 top-24 h-16 ...">
    <input
      type="search"
      className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:bg-white border border-gray-300"
      placeholder="Search for a recipe"
    />
    </div>
  );
};

export default SearchInput;
