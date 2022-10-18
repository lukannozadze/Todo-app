import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
import EscapeButton from "../UI/EscapeButton";

const ListItem = (props) => {
  const [checked, setChecked] = useState(false);
  const checkboxChangeHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    props.onChangeStatus(e.target.id);
  };

  return (
    <div className="listSelector">
      <li
        key={props.value.id}
        className={[
          !checked
            ? `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white relative `
            : `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white text-gray-400 line-through relative`,
          !props.value.status
            ? `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white relative`
            : `mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white text-gray-400 line-through relative`,
        ]}
      >
        <div className="flex">
          <span className="text-gray-700">{props.value.listItem}</span>
          <Checkbox
            id={props.value.id}
            className={[
              `absolute top-[16px] left-[23px]`,
              props.value.status
                ? `bg-gradient-to-r from-gradientStart  to-gradientEnd border-none absolute top-[16px] left-[23px]`
                : `absolute top-[16px] left-[23px]`,
            ]}
            onChange={checkboxChangeHandler}
          />
          <EscapeButton
            id={props.value.id}
            className="escapeSelector absolute left-[500px] opacity-0"
            onDeleteTodo={props.onDeleteTodo}
          />
        </div>
      </li>
    </div>
  );
};

export default ListItem;
