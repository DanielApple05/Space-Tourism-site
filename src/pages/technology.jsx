import React from 'react';
import Header from '../components/headerComponents/header.jsx';
import SpaceTech from '../components/TechComponents/spaceTech.jsx';
import technologyDetails from '../components/TechComponents/technologyData.json';


const technology = () => {

  return (
    <div className='min-h-screen bg-cover xl:pt-[40px] pt-[0px] xl:bg-[url(/src/assets/images/background-technology-desktop.jpg)] bg-[url(/src/assets/images/background-technology-mobile.jpg)]  ' >
      <Header />  

      <SpaceTech spaceLaunch ={ {technologyDetails} } />

    </div>
  );
}

export default technology;
