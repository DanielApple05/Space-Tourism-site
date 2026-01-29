import React from 'react';
import { useState } from 'react';

const CrewInfo = ({ crew }) => {
  const crewMembers = crew.CrewDetails;
  const [activeCrew, setActiveCrew] = useState(0);

  return (

    <div className='text-white xl:mx-[165px] mx-[24px] xl:my-[48px] my-[24px]'>
      
        <p className='xl:text-[28px] text-[16px] xl:pb-[24px] pb-[0px]  xl:text-start text-center'>
          <span className='text-[#979797] mr-[24px]  '>02</span>
          MEET YOUR CREW
        </p>
      

      <div className=' xl:flex grid w-[100%] justify-between items-center xl:gap-[100px] xl:gap-[32px] gap-[0px] xl:mb-[0px] mb-[32px]'> 

        <div className='xl:w-[50%] w-[100%] '>
          <div className='xl:py-[197px] py-[0px] xl:text-start text-center xl:pt-[0px] pt-[40px] xl:pb-0 pb-[24px]'>
            <p className='text-[#979797] xl:text-[32px] text-[18px] font-bold'>
              {crewMembers[activeCrew].role}

            </p>
            <h2 className='xl:text-[56px] text-[24px] font-bold xl:my-[16px] my-[0px]'>
              {crewMembers[activeCrew].name}
            </h2>
            <p>
              {crewMembers[activeCrew].bio}
            </p>
          </div>


          <div className='xl:space-x-[40px] space-x-[16px] flex xl:mt-[40px] mt-[24px] xl:pb-[48px] pb-[32px] xl:justify-start justify-center'>

            {Array.from({ length: 4 }).map((_, crewTabs) => (
              <button key={crewTabs}
                onClick={() => setActiveCrew(crewTabs)}
                className={`xl:px-[10px] px-[10px] xl:py-[10px] py-[10px] bg-gray-600 rounded-full cursor-pointer hover:bg-gray-400 ${activeCrew === crewTabs ? 'bg-white hover:bg-white'  : ''}`}></button>
            ))}

          </div>

        </div>

        <div className='xl:w-[50%] w-[100%] xl:px-[0px] px-[27px] xl:py-[29px] py-[0px] '>
          <img src={crewMembers[activeCrew].images.png} alt={crewMembers[activeCrew].name} className=' w-auto xl:block xl:w-[501px] w-[252px] xl:h-[723px] h-[350px] ' />
        </div>

      </div>

    </div>

  );
}

export default CrewInfo;
