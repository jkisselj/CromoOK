import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Wedding.css';

const Wedding = () => {
  // Sample data for wedding locations in Estonia
  const weddingLocations = [
    {
      id: 3,
      name: 'Historic Castle',
      type: 'Wedding',
      price: 3500,
      rating: 4.8,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Narva',
      features: ['Medieval Architecture', 'Scenic Views', 'In-house Catering']
    },
    {
      id: 6,
      name: 'Botanical Garden',
      type: 'Wedding',
      price: 2200,
      rating: 4.9,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Tartu',
      features: ['Exotic Plants', 'Indoor & Outdoor Areas', 'Unique Setting']
    },
    {
      id: 21,
      name: 'Seaside Restaurant',
      type: 'Wedding',
      price: 2800,
      rating: 4.7,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Pärnu',
      features: ['Ocean View', 'Gourmet Catering', 'Romantic Setting']
    },
    {
      id: 22,
      name: 'Country Estate',
      type: 'Wedding',
      price: 3200,
      rating: 4.8,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Viljandi',
      features: ['Historic Building', 'Large Garden', 'Accommodation']
    },
    {
      id: 23,
      name: 'Luxury Hotel Ballroom',
      type: 'Wedding',
      price: 4500,
      rating: 4.9,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Tallinn',
      features: ['Elegant Decor', 'Full-Service', 'Luxury Experience']
    },
    {
      id: 24,
      name: 'Forest Venue',
      type: 'Wedding',
      price: 2000,
      rating: 4.6,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Otepää',
      features: ['Natural Setting', 'Outdoor Ceremony', 'Rustic Charm']
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header wedding-header">
        <div className="container">
          <h1 className="category-title">Wedding Venues</h1>
          <p className="category-description">
            Discover enchanting venues for your perfect wedding day in Estonia.
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className="filters-section">
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="filter-inputs">
              <input type="number" placeholder="Min" className="filter-input" />
              <span>-</span>
              <input type="number" placeholder="Max" className="filter-input" />
            </div>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">City</label>
            <select className="filter-select">
              <option value="">All Cities</option>
              <option value="tallinn">Tallinn</option>
              <option value="tartu">Tartu</option>
              <option value="narva">Narva</option>
              <option value="parnu">Pärnu</option>
              <option value="viljandi">Viljandi</option>
              <option value="otepaa">Otepää</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Guest Capacity</label>
            <select className="filter-select">
              <option value="">Any Capacity</option>
              <option value="1-50">1-50 guests</option>
              <option value="51-100">51-100 guests</option>
              <option value="101-200">101-200 guests</option>
              <option value="201+">201+ guests</option>
            </select>
          </div>
          
          <button className="btn filter-btn">Apply Filters</button>
        </div>
        
        <div className="locations-grid">
          {weddingLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;