import React from "react";
import lightImgPath from "../images/light-desktop-image.png";
import darkImgPath from "../images/dark-desktop-image.png";
import iconPathLight from "../images/half-moon.png";
import iconPathDark from "../images/sun.png";
import useDarkMode from "../UI/useDarkMode";
const MainHeader = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <span className="font-Josefin text-40 leading-10 text-white font-bold absolute top-[4.5rem] left-[28.5rem]  z-50 xlg:left-[42.5rem] ">
        T O D O
      </span>
      <div onClick={() => setTheme(colorTheme)}>
        {colorTheme === "light" ? (
          <img
            className="absolute top-[4.8rem] right-[28rem] z-50 xlg:right-[42.5rem]"
            src={iconPathDark}
            alt="beautiful white half moon"
          ></img>
        ) : (
          <img
            className="absolute top-[4.8rem] right-[28rem] z-50 xlg:right-[42.5rem]"
            src={iconPathLight}
            alt="beautiful white sun"
          ></img>
        )}
      </div>
      {colorTheme === "dark" ? (
        <img
          className="bg-gradient-to-r from-purple-600  to-blue-500 z-2   relative xlg:w-screen xlg:h-[325px]  "
          src={lightImgPath}
          alt="beautiful view of mountains"
        ></img>
      ) : (
        <img
          className="bg-gradient-to-r from-purple-600  to-blue-500 z-2  relative xlg:w-screen xlg:h-[325px] "
          src={darkImgPath}
          alt="beautiful house interier"
        ></img>
      )}
    </div>
  );
};

export default MainHeader;
