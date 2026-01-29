import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "./tabs.jsx";

const NavButtons = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = useState(0); // initial tab

  const handleNavClick = (index, tab) => {
    navigate(tab.path);
    setActiveIndex(index);
  }
  const [isOpen, setIsOpen] = useState(false);

  const findCurrentTabIndex = () => {
    const currentTabIndex = Tabs.findIndex(tab => tab.path === pathname);
    setActiveIndex(currentTabIndex !== -1 ? currentTabIndex : 0);
  }

  useEffect(() => {
    findCurrentTabIndex();
  }, [pathname]);

  return (
    <div className="flex xl:backdrop-blur-sm transparent xl:pr-[64px] pr-[24px]  xl:pl-[165px] pl-[139px]  ">

      <div className="hidden xl:flex gap-[48px]  ">
        {Tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(index, tab)}
            className={`text-white font-bold  cursor-pointer hover:border-b-gray-500  ${activeIndex === index
              ? "border-b-2 border-white hover:border-b-white "
              : "border-b-2 border-transparent"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div >

   <div className=" z-50 pl-[24px]">
       <button
        className="xl:hidden text-3xl text-white font-bold ]"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

   </div>

      <div
        className={`fixed right-0 h-screen w-[70%] backdrop-blur-sm text-white pl-[32px]
  transform transition-transform duration-300 ease-in-out
  xl:hidden z-40 mt-[100px]
  ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div className="grid gap-[32px] w-[100%] ">
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                handleNavClick(index, tab);
                setIsOpen(false);
              }}
              className={`font-bold text-lg text-start hover:border-r-gray-500 ${activeIndex === index
              ? "border-r-2 border-white hover:border-r-white "
              : "border-r-2 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>


    </div>
  );
};

export default NavButtons;
