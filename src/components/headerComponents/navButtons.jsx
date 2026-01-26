import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "./tabs.jsx";

const NavButtons = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation
  const [active, setActive] = useState("00 Home"); // initial tab

  return (
    <div className="flex gap-[48px] backdrop-blur-sm pr-[64px] pl-[165px]">
      {Tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => {
            navigate(tab.path); // navigate to the route
            setActive(tab.label); // update active tab
             }}
              className={`text-white font-bold cursor-pointer ${
             active === tab.label
              ? "border-b-2 border-white"
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
