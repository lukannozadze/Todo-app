import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";

const ListItem = (props) => {
  const [checked, setChecked] = useState(false);
  const checkboxChangeHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <li
      key={props.value.id}
      className={
        !checked
          ? `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white relative`
          : `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white text-gray-400 line-through relative`
      }
    >
      {props.value.listItem}
      <Checkbox
        id={props.value.id}
        className="absolute top-[16px] left-[23px]"
        onChange={checkboxChangeHandler}
      />
    </li>
  );
};

export default ListItem;
