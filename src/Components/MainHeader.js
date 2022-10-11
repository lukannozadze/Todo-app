import React from "react";
import imgPath from "../images/light-desktop-image.png";
import iconPath from "../images/half-moon.png";
const MainHeader = () => {
  return (
    <div>
      <span className="font-Josefin text-40 leading-10 text-white font-bold absolute top-[4.5rem] left-[28.5rem]  z-50">
        T O D O
      </span>
      <img
        className="absolute top-[4.8rem] right-[28rem] z-50"
        src={iconPath}
        alt="beautiful white half moon"
      ></img>
      <img
        className="bg-gradient-to-r from-purple-600  to-blue-500 z-2  relative "
        src={imgPath}
        alt="beautiful view of mountains"
      ></img>
    </div>
  );
};

export default MainHeader;
