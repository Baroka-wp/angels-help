import React from 'react';
import Hero from './Hero';
import Categories from './Categories';

const Home = () => (
  <>
    <Hero />
    <h2 className="home_h2">Which issue in your live, do you want to resolve ?</h2>
    <div className="main-container">
      <Categories />
    </div>
  </>
);

export default Home;
