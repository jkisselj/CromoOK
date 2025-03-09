import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavIcon from '../NavIcon/NavIcon';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Chrom<span className="logo-highlight">OK</span></span>
          </Link>
        </div>
        
        <div className="search-container">
          <SearchBar placeholder="Search for location..." />
        </div>
        
        <nav className="nav-icons">
          <NavIcon 
            icon="user" 
            label="Profile" 
            to="/profile" 
            isActive={path === '/profile'} 
          />
          <NavIcon 
            icon="home" 
            label="Home" 
            to="/" 
            isActive={path === '/'} 
          />
          <NavIcon 
            icon="notification" 
            label="Notifications" 
            to="/notifications" 
            isActive={path === '/notifications'} 
          />
          <NavIcon 
            icon="camera" 
            label="Add location" 
            to="/add-location" 
            isActive={path === '/add-location'} 
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;