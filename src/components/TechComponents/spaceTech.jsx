import React from 'react';
import { useState } from 'react';

const spaceTech = ({ spaceLaunch }) => {
  const spaceData = spaceLaunch.technologyDetails.technologyDetails;
  const [activeBtn, setActiveBtn] = useState(0);
  const techTab = {
    btn: ["1", "2", "3"]
  };

  return (

    <div className='text-white xl:ml-[165px] ml-[0px] xl:my-[48px] my-[0px] '>
      <h1 className='text-white xl:text-[28px] text-[16px] xl:text-start text-center pb-[24px]'>  <span className='text-[#979797] pr-[24px]'>03</span> SPACE LAUNCH 101</h1>

      <div className='flex xl:flex-row flex-col xl:flex-col flex-col-reverse w-[100%]'>

        <div className='flex xl:flex grid xl:w-[50%] w-[100%] xl:space-x-[64px] space-x-[0px] xl:mr-[32px] mr-[0px] xl:my-[215px] my-[0px] xl:block mt-[32px]  justify-center items-center '>
          <div className=" xl:grid flex gap-[32px] xl:block justify-center xl:block mb-[40px]">
            {techTab.btn.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActiveBtn(index)}
                className={`xl:py-[21px] py-[9px] xl:px-[35px] px-[15px] border rounded-full cursor-pointer xl:text-[32px] text-[18px] hover:ring-2
            ${activeBtn === index ? "bg-white text-black" : "bg-transparent  text-white"}
               `}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className='xl:space-y-[20px] space-y-[0px] grid content-between  xl:text-start text-center xl:block px-[24px]'>
            <h4 className='xl:text-[32px] text-[18px] text-[#979797] xl:block mb-[16px]'>
              THE TERMINOLOGY
            </h4>
            <h2 className='xl:text-[56px] text-[24px] xl:block mb-[16px]'>
              {spaceData[activeBtn].name}
            </h2>
            <p>
              {
                spaceData[activeBtn].description
              }
            </p>
          </div>


        </div>

        <div className='xl:w-[50%] w-[100%] xl:py-[67px] py-[0px] '>
          <img src={spaceData[activeBtn].images.portrait} alt="" className='xl:h-[600px] h-[258px] w-[622px] ' />
        </div>

      </div>



    </div>

  );
}

export default spaceTech;
