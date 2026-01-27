import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "./tabs.jsx";

const NavButtons = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [activeIndex, setActiveIndex] = useState(0); // initial tab

  const handleNavClick = (index, tab) => {
    navigate(tab.path);
    setActiveIndex(index);
  }

  const findCurrentTabIndex = () => {
    const currentTabIndex = Tabs.findIndex(tab => tab.path === pathname);
    setActiveIndex(currentTabIndex !== -1 ? currentTabIndex : 0);
  }

  useEffect(() => {
    findCurrentTabIndex();
  }, [pathname]);

  return (
    <div className="flex gap-[48px] backdrop-blur-sm pr-[64px] pl-[165px]">
      {Tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleNavClick(index, tab)}
              className={`text-white font-bold  cursor-pointer  ${
             activeIndex === index
              ? "border-b-2 border-white "
              : "border-b-2 border-transparent"
          }`}
         >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavButtons;
