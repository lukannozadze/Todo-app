import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
const AddTodo = (props) => {
  const [currentItem, setCurrentItem] = useState("");

  const changeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const onSaveListInformation = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
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
        onKeyDown={onSaveListInformation}
      ></input>
      <Checkbox
        id="check-box"
        className={"absolute top-[179.2px] left-[472px] "}
      />
    </form>
  );
};

export default AddTodo;