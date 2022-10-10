import React from "react";
import correctionMarkPath from "../images/correction-mark.png";

const Checkbox = (props) => {
  return (
    <label htmlFor={props.id}>
      <input
        type="checkbox"
        id={props.id}
        className={props.className}
        onClick={props.onClick}
      ></input>
      <img
        src={correctionMarkPath}
        alt="beautiful correction symbol"
        id="correction-mark1"
        className="absolute top-[187px] left-[479px] hidden cursor-pointer "
      ></img>
    </label>
  );
};
export default Checkbox;
