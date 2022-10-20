import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
import EscapeButton from "../UI/EscapeButton";
import useDarkMode from "../UI/useDarkMode";

const ListItem = (props) => {
  useDarkMode();
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
            ? ` w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white dark:bg-[#25273d] dark:border-[#393a4b] dark:text-[#c8cbe7] dark:rounded-t-[0px] relative `
            : ` w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white text-gray-400 line-through dark:bg-[#25273d] dark:border-[#393a4b] dark:text-[#4d5067]
            dark:rounded-t-[0px] relative`,
          !props.value.status
            ? ` w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white dark:bg-[#25273d] dark:border-[#393a4b] dark:text-[#c8cbe7] dark:rounded-t-[0px] relative`
            : ` w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
           border-solid  border-b-2  border-gray-200 leading-[18px] bg-white dark:bg-[#25273d] dark:border-[#393a4b] text-gray-400 line-through dark:text-[#4d5067]
            dark:rounded-t-[0px] relative`,
        ]}
      >
        <div className="flex">
          <span>{props.value.listItem}</span>
          <Checkbox
            id={props.value.id}
            className="listCheckbox absolute top-[16px] left-[23px]"
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
