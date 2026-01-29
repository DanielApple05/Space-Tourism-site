import React from 'react';
import BgTech from '../assets/images/background-technology-desktop.jpg'; 
import Header from '../components/headerComponents/header.jsx';
import SpaceTech from '../components/TechComponents/spaceTech.jsx';
import technologyDetails from '../components/TechComponents/technologyData.json';


const technology = () => {

  return (
    <div className='min-h-screen bg-cover xl:pt-[40px] pt-[0px]' style={{ backgroundImage: `url(${BgTech})`}}>
      <Header />  

      <SpaceTech spaceLaunch ={ {technologyDetails} } />

    </div>
  );
}

export default technology;
