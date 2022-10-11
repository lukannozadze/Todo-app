import React, { useState } from "react";
import SearchCheckbox from "../UI/Checkbox";
const AddTodo = (props) => {
  const [currentItem, setCurrentItem] = useState("");

  const changeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const onSaveListInformation = (e) => {
    if (e.target.checked) {
      props.onSaveListInformation(currentItem);
      setCurrentItem("");
    }
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={currentItem}
        placeholder="Create a new todo"
        className="w-[540px] h-[64px] rounded-[5px] absolute left-0 right-0 top-[160px] leading-[18px] ml-auto mr-auto font-Josefin pl-[72px] text-[18px] focus:outline-none "
        onChange={changeHandler}
      ></input>
      <SearchCheckbox
        id="check-box"
        className="appearance-none w-[24px] h-[24px] border-2 rounded-3xl cursor-pointer border-defaultCheckbox absolute top-[179.2px] left-[472px]"
        onClick={onSaveListInformation}
      />
    </form>
  );
};

export default AddTodo;
