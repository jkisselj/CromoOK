import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Home.css';

const Home = () => {
  // Test data for locations in Estonia
  const featuredLocations = [
    {
      id: 1,
      name: 'IDA Hub',
      type: 'Production',
      price: 1200,
      rating: 5.0,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Tallinn',
      features: ['Large Space', 'Green Screen', 'Sound Isolation', 'Parking', 'Power']
    },
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
      id: 4,
      name: 'Beach House',
      type: 'Photo Shoot',
      price: 800,
      rating: 4.6,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Pärnu',
      features: ['Natural Light', 'Beach Access', 'Modern Interior', 'WC']
    }
  ];

  const popularLocations = [
    {
      id: 5,
      name: 'Kreenholmi manufaktuur',
      type: 'Production',
      price: 0,
      rating: 4.5,
      imageUrl: '/images/locations/location1.jpg',
      city: 'Narva',
      features: ['Urban Style', 'High Ceilings', 'Raw Industrial Look']
    },
    {
      id: 6,
      name: 'Botanical Garden',
      type: 'Production ',
      price: 0,
      rating: 4.9,
      imageUrl: '/images/locations/location2.jpg',
      city: 'Tartu',
      features: ['Exotic Plants', 'Indoor & Outdoor Areas', 'Unique Setting']
    },
    {
      id: 7,
      name: 'Railway station',
      type: 'Production',
      price: 0,
      rating: 4.8,
      imageUrl: '/images/locations/location3.jpg',
      city: 'Tallinn',
      features: ['Power', 'Scenic Views', 'Large Parking']
    },
    {
      id: 8,
      name: 'Art Gallery',
      type: 'Photo Shoot',
      price: 0,
      rating: 4.4,
      imageUrl: '/images/locations/location4.jpg',
      city: 'Haapsalu',
      features: ['Artistic Environment', 'Exhibition Space', 'Gallery Lighting']
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Find the Perfect Location for Your Project</h1>
            <p className="hero-subtitle">
              Discover unique shooting locations for productions, events, photo shoots, and weddings
            </p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <Carousel />
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Locations</h2>
          <div className="locations-grid">
            {featuredLocations.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="popular-section">
        <div className="container">
          <h2 className="section-title">Public places</h2>
          <div className="locations-grid">
            {popularLocations.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">List Your Location</h2>
            <p className="cta-text">
              Own a unique space? Earn money by renting it out for productions, events, photo shoots, or weddings.
            </p>
            <button className="btn cta-btn">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;