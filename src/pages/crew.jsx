import React from 'react';
import Header from '../components/headerComponents/header';
import CrewInfo from '../components/crewComponents/crewInfo.jsx';
import CrewDetails from '../components/crewComponents/crewData.json';


const crew = () => {

  return (
    <div className="min-h-screen  bg-cover xl:pt-[40px] pt-[0px] xl:bg-[url('/src/assets/images/background-crew-desktop.jpg')] bg-[url('/src/assets/images/background-crew-mobile.jpg')]"
     >

      <Header />

      <CrewInfo crew={CrewDetails} />
      
    </div>
  );
}

export default crew;
