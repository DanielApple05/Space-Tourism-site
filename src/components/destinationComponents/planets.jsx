import React, { useState } from "react";


const planets = ({ galaxy }) => {
  const [activePlanet, setActivePlanet] = useState(0);

  return (
    <div className="text-white xl:mx-[165px] mx-[24px] xl:my-[48px] my-[24px] ">
      <h1 className="xl:text-[28px] text-[16px] xl:text-start text-center">
        <span className="text-[#979797] font-bold">01</span> Pick your
        destination
      </h1>
      <div className="w-[100%] flex  xl:py-[133px] py-[0px] xl:pr-[47px] pr-[0px] xl:pl-[27px] pl-[0px] justify-between xl:flex grid ">
        <div className="xl:w-[40%] block xl:block justify-center flex xl:py-0 py-[26px] xl:px-0 px-[88px]">
          <img src={galaxy[activePlanet].images.webp} alt="" className="xl:w-[480px] w-[150px] xl:h-[480px] h-[150px] "/>
        </div>
        <div className=" xl:w-[40%] block">
          <div className="border-b-[2px] border-[#979797] xl:mb-[40px] mb-[24px] xl:pb-[40px] pb-[24px] ">
            <div className=" space-x-6 font-bold flex xl:block justify-center ">
              {galaxy.map((planet, index) => (
                <button
                  key={planet.name}
                  onClick={() => setActivePlanet(index)} 
                  className={`text-white xl:text-[18px] text-[14px] pb-4 font-bold cursor-pointer hover:border-b-gray-500 hover ${
                    activePlanet === index
                      ? "border-b-2 border-white hover:border-b-white"
                      : "border-b-2 border-transparent"
                  }`}
                 >
                  {planet.name}
                </button>
              ))}
            </div>

            <div className=" grid xl:justify-items-start justify-items-center">
            
                <p className=" xl:text-[110px] text-[56px] ">{galaxy[activePlanet].name}</p>
              
              <p className="xl:text-[18px] text-[15px] xl:text-start text-center">{galaxy[activePlanet].descriptions}</p>
            </div>
       
          </div>
          <div className=" flex xl:flex grid  xl:gap-[20px] gap-[24px] justify-between w-[100%] ">
            <div className=" grid xl:justify-start justify-center w-[50%]">
              <p className="text-[14px]">AVG DISTANCE
              </p>
              <p className="text-[32px]">{galaxy[activePlanet].distance}</p>
            </div>

            <div className=" grid xl:justify-start justify-center w-[50%]">
              <p className="text-[14px]">EST. TRAVEL TIME</p>
              <p className="text-[28px]">{galaxy[activePlanet].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default planets;
