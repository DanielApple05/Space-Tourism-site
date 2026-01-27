import React from 'react';
import { useState } from 'react';

const CrewInfo = ({ crew }) => {
  const crewMembers = crew.CrewDetails;
  const [activeCrew, setActiveCrew] = useState(0);

  return (

    <div className='text-white mx-[165px] my-[48px]'>
      <div >
        <p className='text-[28px] pb-[24px]  '>
          <span className='text-[#979797] mr-[24px]'>02</span>
          MEET YOUR CREW
        </p>
      </div>

      <div className='flex w-[100%] justify-between items-center space-x-6  '>

        <div className='w-[50%] '>
          <div className='py-[197px]'>
            <p className='text-[#979797] text-[32px] font-bold'>
              {crewMembers[activeCrew].role}

            </p>
            <h2 className='text-[56px] font-bold my-[16px]'>
              {crewMembers[activeCrew].name}
            </h2>
            <p>
              {crewMembers[activeCrew].bio}
            </p>
          </div>


          <div className='space-x-[40px] flex mt-[40px] pb-[48px] '>

            {Array.from({ length: 4 }).map((_, crewTabs) => (
              <button key={crewTabs}
                onClick={() => setActiveCrew(crewTabs)}
                className={`w-[10px] h-[10px] bg-gray-600 rounded-lg cursor-pointer ${activeCrew === crewTabs ? 'bg-white' : ''}`}></button>
            ))}

          </div>

        </div>

        <div className='w-[50%] py-[29px]'>
          <img src={crewMembers[activeCrew].images.png} alt={crewMembers[activeCrew].name} className='' />
        </div>

      </div>

    </div>

  );
}

export default CrewInfo;
