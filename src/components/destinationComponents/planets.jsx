import React, { useState } from "react";


const planets = ({ galaxy }) => {
  const [activePlanet, setActivePlanet] = useState(0);

  return (
    <div className="text-white w-[] flex flex-col mx-[165px] my-[48px]">
      <h1 className="text-[28px]">
        <span className="text-[#979797] font-bold">01</span> Pick your
        destination
      </h1>
      <div className="w-[100%] flex  py-[133px] pr-[47px] pl-[27px] justify-between ">
        <div className="w-[40%] ">
          <img src={galaxy[activePlanet].images.webp} alt="" className="w-[480px] h-[480px]" />
        </div>
        <div className=" w-[40%]  ">
          <div className="border-b-[2px] border-[#979797] mb-[40px] pb-[40px] ">
            <div className=" space-x-6 font-bold">
              {galaxy.map((planet, index) => (
                <button
                  key={planet.name}
                  onClick={() => setActivePlanet(index)} 
                  className={`text-white pb-4 font-bold cursor-pointer hover:border-b-gray-500 hover ${
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
                <p className=" text-[110px] ">{galaxy[activePlanet].name}</p>
              </div>
              <p className="text-[18px]">{galaxy[activePlanet].descriptions}</p>
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
