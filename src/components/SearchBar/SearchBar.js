import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка поискового запроса
    console.log('Searching for:', searchTerm);
  };

  return (
    <form 
      className={`search-bar ${focused ? 'focused' : ''}`} 
      onSubmit={handleSubmit}
    >
      <div className="search-icon">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      
      {searchTerm && (
        <button 
          type="button" 
          className="clear-button"
          onClick={() => setSearchTerm('')}
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
      
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;