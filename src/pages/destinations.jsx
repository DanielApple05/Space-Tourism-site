import React from 'react';
import Header from '../components/headerComponents/header';
import Planets from '../components/destinationComponents/planets'
import GalaxyDetails from '../components/destinationComponents/Galaxy';

const Destinations = () => {
  return (
    <div className="min-h-screen bg-norepeat bg-cover xl:pt-[40px] pt-[0px] xl:bg-[url('/src/assets/images/background-destination-desktop.jpg')] bg-[url('/src/assets/images/background-destination-mobile.jpg')] "
      >
        
      <Header />
      
        <Planets galaxy={GalaxyDetails}></Planets>
      

    </div>
  );
}

export default Destinations;
