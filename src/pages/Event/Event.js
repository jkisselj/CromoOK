import React from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Event.css';

const Event = () => {
  // Sample data for event locations in Estonia
  const eventLocations = [
    {
      id: 2,
      name: 'Premium Conference Hall',
      type: 'Event',
      price: 950,
      rating: 4.7,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Tartu',
      features: ['Audio-Video Equipment', 'Catering Available', 'Up to 100 people']
    },
    {
      id: 7,
      name: 'Private Yacht',
      type: 'Event',
      price: 4000,
      rating: 4.8,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Tallinn',
      features: ['Luxury Experience', 'Seaside Views', 'Professional Crew']
    },
    {
      id: 13,
      name: 'City Theater',
      type: 'Event',
      price: 1800,
      rating: 4.6,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Tallinn',
      features: ['Historical Building', 'Professional Stage', 'Theater Lighting']
    },
    {
      id: 14,
      name: 'Modern Rooftop',
      type: 'Event',
      price: 1500,
      rating: 4.5,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tallinn',
      features: ['City Views', 'Open Air', 'Bar Area']
    },
    {
      id: 15,
      name: 'Countryside Manor',
      type: 'Event',
      price: 2500,
      rating: 4.9,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Viljandi',
      features: ['Historic Building', 'Garden', 'Accommodation Available']
    },
    {
      id: 16,
      name: 'Modern Gallery Space',
      type: 'Event',
      price: 1200,
      rating: 4.3,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Tartu',
      features: ['Contemporary', 'Exhibition Space', 'Central Location']
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1 className="category-title">Event Locations</h1>
          <p className="category-description">
            Discover the perfect venue for your conferences, workshops, corporate events, and celebrations in Estonia.
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
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Capacity</label>
            <select className="filter-select">
              <option value="">Any Capacity</option>
              <option value="1-50">1-50 people</option>
              <option value="51-100">51-100 people</option>
              <option value="101-200">101-200 people</option>
              <option value="201+">201+ people</option>
            </select>
          </div>
          
          <button className="btn filter-btn">Apply Filters</button>
        </div>
        
        <div className="locations-grid">
          {eventLocations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;