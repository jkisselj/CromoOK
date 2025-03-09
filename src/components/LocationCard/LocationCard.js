import React from 'react';
import { Link } from 'react-router-dom';
import './LocationCard.css';

const LocationCard = ({ location }) => {
  const { 
    id, 
    name, 
    type, 
    price, 
    rating, 
    imageUrl, 
    city, 
    features 
  } = location;

  return (
    <Link to={`/location/${id}`} className="location-card">
      <div className="location-image">
        <img src={imageUrl} alt={" "} />
        {type && <div className="location-type">{type}</div>}
      </div>
      
      <div className="location-info">
        <div className="location-header">
          <h3 className="location-name">{name}</h3>
          
          <div className="location-rating">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="location-city">{city}</div>
        
        {features && features.length > 0 && (
          <div className="location-features">
            {features.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature-tag">
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="feature-more">+{features.length - 3}</span>
            )}
          </div>
        )}
        
        <div className="location-price">
          <span className="price-value">${price}</span>
          <span className="price-unit"> / day</span>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;