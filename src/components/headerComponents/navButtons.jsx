import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "./tabs.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavButtons = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = useState(0); // initial tab

  const handleNavClick = (index, tab) => {
    navigate(tab.path);
    setActiveIndex(index);
  }
  const [isOpen, setIsOpen] = useState();

  const findCurrentTabIndex = () => {
    const currentTabIndex = Tabs.findIndex(tab => tab.path === pathname);
    setActiveIndex(currentTabIndex !== -1 ? currentTabIndex : 0);
  }

  // ImageSwitcher = [{ x, o }]

  //   const ImageSwitcher = () => {
  //   const [currentIcon, setCurrentIcon] = useState(Icon1)};

  useEffect(() => {
    findCurrentTabIndex();
  }, [pathname]);

  return (
    <div className="flex xl:backdrop-blur-sm transparent xl:pr-[64px] pr-[24px]  xl:pl-[165px] pl-[139px] ">

      <div className="hidden xl:flex gap-[48px]  ">
        {Tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(index, tab)}
            className={`text-white font-bold  cursor-pointer hover:border-b-gray-500 py-[38px] ${activeIndex === index
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
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
         className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}

          />
        </button>
      </div>
      <div
        className={`fixed right-0 h-screen w-[70%] backdrop-blur-2xl text-white pl-[32px]
  transform transition-transform duration-300 ease-in-out
  xl:hidden top-0 py-[100px]
  ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div className="grid gap-[32px] ">
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
