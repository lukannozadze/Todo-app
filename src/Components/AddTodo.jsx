import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
const AddTodo = (props) => {
  const [currentItem, setCurrentItem] = useState("");
  const [inputCheckboxStatus, setInputCheckboxStatus] = useState(false);
  const changeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  let data = {};
  const onSaveListInformation = (e) => {
    if (e.key === "Enter") {
      if (currentItem === "") {
        e.preventDefault();
      } else {
        e.preventDefault();
        data = {
          listItem: currentItem,
          id: Math.random().toString(),
          status: inputCheckboxStatus,
        };
        props.onSaveListInformation(data);
        setCurrentItem("");
      }
    }
  };
  const checkboxChangeHandler = (e) => {
    setInputCheckboxStatus(!inputCheckboxStatus);

    console.log(inputCheckboxStatus);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={currentItem}
        placeholder="Create a new todo"
        className="w-[540px] h-[64px] rounded-[5px] absolute left-0 right-0 top-[160px] leading-[18px] ml-auto mr-auto font-Josefin pl-[72px] text-[18px] focus:outline-none dark:bg-[#25273d] dark:text-[#c8cbe7] "
        onChange={changeHandler}
        onKeyDown={onSaveListInformation}
      ></input>
      <Checkbox
        id="check-box"
        className={
          "absolute top-[179.2px] left-[472px] xlg:left-[705px] 2xl:left-[520px]"
        }
        onChange={checkboxChangeHandler}
      />
    </form>
  );
};

export default AddTodo;
