import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavIcon.css';

const NavIcon = ({ icon, label, to, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Иконки для разных категорий
  const icons = {
    user: <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>,
    home: <svg viewBox="0 0 24 24" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>,
    notification: <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>,
    camera: <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 15.2c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm9-5.5h-3.2L15.6 6c-.1-.2-.3-.4-.5-.5-.2-.1-.4-.2-.6-.2H9.5c-.2 0-.4.1-.6.2-.2.1-.4.3-.5.5L6.2 9.7H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-9 9c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" /></svg>
  };

  return (
    <Link 
      to={to} 
      className={`nav-icon ${isActive || isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="nav-icon-content">
        <div className="icon">
          {icons[icon]}
        </div>
        <span className="label">{label}</span>
      </div>
    </Link>
  );
};

export default NavIcon;