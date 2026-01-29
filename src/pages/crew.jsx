import React from 'react';
import Header from '../components/headerComponents/header';
import bgCrew from '../assets/images/background-crew-desktop.jpg';
import CrewInfo from '../components/crewComponents/crewInfo.jsx';
import CrewDetails from '../components/crewComponents/crewData.json';


const crew = () => {

  return (
    <div className="min-h-screen  bg-cover xl:pt-[40px] pt-[0px] "
      style={{ backgroundImage: `url(${bgCrew})` }} >

      <Header />

      <CrewInfo crew={CrewDetails} />
      
    </div>
  );
}

export default crew;
