import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Carousel.css';

const CategoryItem = ({ title, icon, path, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Набор иконок для категорий
  const icons = {
    production: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
      </svg>
    ),
    event: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M16 10.53c-.29-.29-.77-.29-1.06 0l-4.35 4.35L9.06 13.35c-.29-.29-.77-.29-1.06 0-.29.29-.29.77 0 1.06l2.11 2.11c.29.29.77.29 1.06 0L16 11.59c.29-.29.29-.77 0-1.06zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
      </svg>
    ),
    photoShoot: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm9-3h-3.18c-.4 0-.72-.32-.72-.72v-.06c0-1.24-1.01-2.25-2.25-2.25H9.15c-1.24 0-2.25 1.01-2.25 2.25v.06c0 .4-.32.72-.72.72H3v11h18V9z" />
      </svg>
    ),
    wedding: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 10.38 9.5 9 10.62 6.5 12 6.5zm3 8.88c0-2.32-1.68-4.38-3-4.38s-3 2.06-3 4.38V20h6v-4.62z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    )
  };

  return (
    <Link 
      to={path}
      className={`category-item ${isActive || isHovered ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="category-icon">
        {icons[icon]}
      </div>
      <div className="category-title">{title}</div>
    </Link>
  );
};

const Carousel = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { title: 'Production', icon: 'production', path: '/production' },
    { title: 'Event', icon: 'event', path: '/event' },
    { title: 'Photo Shoot', icon: 'photoShoot', path: '/photoshoot' },
    { title: 'Wedding', icon: 'wedding', path: '/wedding' }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category.title);
    navigate(category.path);
  };

  return (
    <div className="carousel-container">
      <div className="categories-wrapper">
        <div className="categories">
          {categories.map((category) => (
            <CategoryItem
              key={category.title}
              title={category.title}
              icon={category.icon}
              path={category.path}
              isActive={activeCategory === category.title}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;