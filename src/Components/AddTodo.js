import React from "react";
import Checkbox from "./UI/Checkbox";
const AddTodo = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Create a new todo"
        className="w-[33.75rem] h-[4rem] rounded-[5px] absolute left-0 right-0 top-[10rem] ml-auto mr-auto font-Josefin pl-[72px] text-[18px] "
        onChange={changeHandler}
      ></input>
      <Checkbox
        id="check-box-1"
        className="appearance-none w-[24px] h-[24px] border-2 rounded-3xl border-defaultCheckbox absolute top-[11.2rem] left-[29.5rem] "
      />
    </form>
  );
};

export default AddTodo;
