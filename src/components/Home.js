import React from 'react';
import Hero from './Hero';
import Categories from './Categories';

const Home = () => (
  <>
    <Hero />
    <div className="main-container">
      <h2>Which issue in your live, do you want to resolve ?</h2>
      <Categories />
    </div>
  </>
);

export default Home;
