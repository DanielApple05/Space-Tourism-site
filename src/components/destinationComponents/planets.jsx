import React, { useState } from "react";


const planets = ({ galaxy }) => {
  const [activePlanet, setActivePlanet] = useState(0);

  return (
    <div className="text-white xl:mx-[165px] mx-[24px] xl:my-[48px] my-[24px] ">
      <h1 className="xl:text-[28px] text-[16px]">
        <span className="text-[#979797] font-bold">01</span> Pick your
        destination
      </h1>
      <div className="w-[100%] flex  xl:py-[133px] py-[10px] xl:pr-[47px] pr-[0px] xl:pl-[27px] pl-[0px] justify-between ">
        <div className="xl:w-[40%] block ">
          <img src={galaxy[activePlanet].images.webp} alt="" className="xl:w-[480px] w-[150px] xl:h-[480px] h-[150px] "/>
        </div>
        <div className=" xl:w-[40%] block  ">
          <div className="border-b-[2px] border-[#979797] mb-[40px] pb-[40px] ">
            <div className=" space-x-6 font-bold">
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

            <div>
              <div>
                <p className=" xl:text-[110px] text-[56px] ">{galaxy[activePlanet].name}</p>
              </div>
              <p className="xl:text-[18px] text-[15px]">{galaxy[activePlanet].descriptions}</p>
            </div>
       
          </div>
          <div className="flex  gap-[20px] ">
            <div className=" w-[50%] flex flex-col justify-between">
              <p className="text-[14px]">AVG DISTANCE
              </p>
              <p className="text-[32px]">{galaxy[activePlanet].distance}</p>
            </div>

            <div className="w-[50%] flex flex-col justify-between">
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
