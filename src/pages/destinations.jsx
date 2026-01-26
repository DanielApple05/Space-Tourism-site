import React from 'react';
import Header from '../components/headerComponents/header';
import bgDestination from '../assets/images/background-destination-desktop.jpg';
import Planets from '../components/destinationComponents/planets'
import GalaxyDetails from '../components/destinationComponents/Galaxy';

const Destinations = () => {
  return (
    <div className="min-h-screen  bg-cover flex flex-col "
      style={{ backgroundImage: `url(${bgDestination})` }} >
      <Header />
      <div className=''>
        <Planets galaxy={GalaxyDetails}></Planets>
      </div>

    </div>
  );
}

export default Destinations;
