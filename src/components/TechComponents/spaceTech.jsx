import React from 'react';
import { useState } from 'react';

const spaceTech = ({ spaceLaunch }) => {
  const spaceData = spaceLaunch.technologyDetails.technologyDetails;
  const [activeBtn, setActiveBtn] = useState(0);
  const techTab = {
    btn: ["1", "2", "3"]
  };
  console.log("spaceData", spaceData)

  return (

    <div className='text-white ml-[165px] my-[48px] '>
      <h1 className='text-white text-[28px] pb-[24px]'>  <span className='text-[#979797]'>03</span> SPACE LAUNCH 101</h1>

      <div className='flex w-[100%]'>

        <div className='flex w-[50%] space-x-[64px] mr-[32px] my-[215px]'>
          <div className="grid gap-[32px]">
            {techTab.btn.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActiveBtn(index)}
                className={`py-[21px] px-[35px] border rounded-full cursor-pointer text-[32px]
            ${activeBtn === index ? "bg-white text-black" : "bg-transparent    text-white"}
               `}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className='space-y-[20px] grid content-between '>
            <h4 className='text-[32px] text-[#979797]'>
              THE TERMINOLOGY
            </h4>
            <h2 className='text-[56px]'>
              {spaceData[activeBtn].name}
            </h2>
            <p>
              {
                spaceData[activeBtn].description
              }
            </p>
          </div>


        </div>

        <div className='w-[50%] py-[67px]  '>
          <img src={spaceData[activeBtn].images.portrait} alt="" className='h-[600px] w-[622px] ' />
        </div>

      </div>



    </div>

  );
}

export default spaceTech;
