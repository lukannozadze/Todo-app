import React from "react";
import correctionMarkPath from "../images/correction-mark.png";

const Checkbox = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          onChange={props.onChange}
          className="checkbox  appearance-none w-[24px] h-[24px] border-2 rounded-3xl cursor-pointer border-defaultCheckbox checked:bg-gradient-to-r from-gradientStart  to-gradientEnd checked:border-none dark:border-[#393a4b]"
        ></input>
        <img
          src={correctionMarkPath}
          alt="beautiful correction symbol"
          id="correction-mark1"
          className="mt-[-22px] ml-[7px] hidden"
        ></img>
      </label>
    </div>
  );
};
export default Checkbox;
