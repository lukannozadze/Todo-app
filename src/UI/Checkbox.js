import React from "react";
import correctionMarkPath from "../images/correction-mark.png";

const Checkbox = (props) => {
  return (
    <label htmlFor={props.id} className={props.className}>
      <input
        type="checkbox"
        id={props.id}
        onChange={props.onChange}
        className="appearance-none w-[24px] h-[24px] border-2 rounded-3xl cursor-pointer border-defaultCheckbox checked:bg-gradient-to-r from-gradientStart  to-gradientEnd checked:border-none"
      ></input>
      <img
        src={correctionMarkPath}
        alt="beautiful correction symbol"
        id="correction-mark1"
        className="mt-[-22px] ml-[7px]"
      ></img>
    </label>
  );
};
export default Checkbox;
