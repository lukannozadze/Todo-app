import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
const AddTodo = (props) => {
  const [currentItem, setCurrentItem] = useState("");

  const changeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const onSaveListInformation = (e) => {
    if (e.target.checked) {
      props.onSaveListInformation(currentItem);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={currentItem}
        placeholder="Create a new todo"
        className="w-[33.75rem] h-[4rem] rounded-[5px] absolute left-0 right-0 top-[10rem] ml-auto mr-auto font-Josefin pl-[72px] text-[18px] focus:outline-none "
        onChange={changeHandler}
      ></input>
      <Checkbox
        id="check-box-1"
        className="appearance-none w-[24px] h-[24px] border-2 rounded-3xl cursor-pointer border-defaultCheckbox absolute top-[11.2rem] left-[29.5rem]"
        onClick={onSaveListInformation}
      />
    </form>
  );
};

export default AddTodo;
