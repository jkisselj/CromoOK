import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Production.css';

const Production = () => {
  // Sample data for production locations in Estonia
  const productionLocations = [
    {
      id: 1,
      name: 'Modern Studio',
      type: 'Production',
      price: 1200,
      rating: 4.9,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tallinn',
      features: ['Large Space', 'Green Screen', 'Sound Isolation', 'Parking']
    },
    {
      id: 5,
      name: 'Industrial Loft',
      type: 'Production',
      price: 950,
      rating: 4.5,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tallinn',
      features: ['Urban Style', 'High Ceilings', 'Raw Industrial Look']
    },
    {
      id: 9,
      name: 'Old Factory',
      type: 'Production',
      price: 800,
      rating: 4.3,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Narva',
      features: ['Large Open Space', 'Industrial Setting', 'Film Equipment Available']
    },
    {
      id: 10,
      name: 'Modern Office',
      type: 'Production',
      price: 600,
      rating: 4.7,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Tartu',
      features: ['Corporate Setting', 'Meeting Rooms', 'Modern Interior']
    },
    {
      id: 11,
      name: 'Lakeside House',
      type: 'Production',
      price: 1400,
      rating: 4.8,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Viljandi',
      features: ['Natural Surroundings', 'Multiple Rooms', 'Lakeside Views']
    },
    {
      id: 12,
      name: 'University Campus',
      type: 'Production',
      price: 1000,
      rating: 4.4,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tartu',
      features: ['Academic Setting', 'Multiple Buildings', 'Lecture Halls']
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1 className="category-title">Production Locations</h1>
          <p className="category-description">
            Find the perfect location for your film, TV show, or commercial production in Estonia.
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
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Features</label>
            <div className="filter-checkboxes">
              <label className="checkbox-label">
                <input type="checkbox" /> Green Screen
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Sound Isolation
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Lighting Equipment
              </label>
            </div>
          </div>
          
          <button className="btn filter-btn">Apply Filters</button>
        </div>
        
        <div className="locations-grid">
          {productionLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Production;