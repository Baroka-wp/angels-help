import React from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';
import Categories from './Categories';
import Spinner from './Pages/Spinner';

const Home = () => {
  const loading = useSelector((state) => state.loader);
  return (
    <>
      <Hero />
      <h2 className="home_h2">Which issue in your live, do you want to resolve ?</h2>
      {loading && <Spinner />}
      <div className="main-container">
        <Categories />
      </div>
    </>
  );
};

export default Home;
