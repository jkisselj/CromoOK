import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './PhotoShoot.css';

const PhotoShoot = () => {
  // Sample data for photo shoot locations in Estonia
  const photoShootLocations = [
    {
      id: 4,
      name: 'Beach House',
      type: 'Photo Shoot',
      price: 800,
      rating: 4.6,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Pärnu',
      features: ['Natural Light', 'Beach Access', 'Modern Interior']
    },
    {
      id: 8,
      name: 'Art Gallery',
      type: 'Photo Shoot',
      price: 600,
      rating: 4.4,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Haapsalu',
      features: ['Artistic Environment', 'Exhibition Space', 'Gallery Lighting']
    },
    {
      id: 17,
      name: 'Minimalist Studio',
      type: 'Photo Shoot',
      price: 500,
      rating: 4.5,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tallinn',
      features: ['White Cyclorama', 'Professional Lighting', 'Makeup Area']
    },
    {
      id: 18,
      name: 'Botanical Greenhouse',
      type: 'Photo Shoot',
      price: 700,
      rating: 4.7,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Tartu',
      features: ['Exotic Plants', 'Natural Light', 'Unique Backdrop']
    },
    {
      id: 19,
      name: 'Urban Rooftop',
      type: 'Photo Shoot',
      price: 900,
      rating: 4.8,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Tallinn',
      features: ['City Skyline', 'Sunset Views', 'Versatile Space']
    },
    {
      id: 20,
      name: 'Historic Castle Interior',
      type: 'Photo Shoot',
      price: 1200,
      rating: 4.9,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Narva',
      features: ['Medieval Architecture', 'Historic Props', 'Atmospheric']
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1 className="category-title">Photo Shoot Locations</h1>
          <p className="category-description">
            Find stylish and inspiring locations for your next photography project in Estonia.
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
              <option value="haapsalu">Haapsalu</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Style</label>
            <select className="filter-select">
              <option value="">All Styles</option>
              <option value="studio">Studio</option>
              <option value="natural">Natural Light</option>
              <option value="urban">Urban</option>
              <option value="historic">Historic</option>
              <option value="nature">Nature</option>
            </select>
          </div>
          
          <button className="btn filter-btn">Apply Filters</button>
        </div>
        
        <div className="locations-grid">
          {photoShootLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoShoot;