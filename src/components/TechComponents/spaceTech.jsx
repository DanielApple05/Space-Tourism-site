import React from 'react';
import { useState } from 'react';

const spaceTech = ({ spaceLaunch }) => {
  const spaceData = spaceLaunch.technologyDetails.technologyDetails;
  const [activeBtn, setActiveBtn] = useState(0);
  const techTab = {  btn: ["1", "2", "3"]
  };
  console.log("spaceData", spaceData )

  return (

    <div className='text-white mx-[165px] my-[48px] w-[100%]'>
      <h1 className='text-white text-[28px] pb-[24px]'>  <span className='text-[#979797]'>03</span> SPACE LAUNCH 101</h1>

      <div>

        <div>
          <div className="grid gap-[32px]">
            {techTab.btn.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActiveBtn(index)}
                className={`py-[21px] px-[32px] border rounded-full cursor-pointer
            ${activeBtn === index ? "bg-white text-black" : "bg-transparent    text-white"}
               `}
              >
                {btn}
              </button>
            ))}
          </div>


          <div>
            <h4>
              THE TERMINOLOGY
            </h4>
            <h2>
              {spaceData[activeBtn].name}
            </h2>
          </div>


        </div>

      </div>



    </div>

  );
}

export default spaceTech;
