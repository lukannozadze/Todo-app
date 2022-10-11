import React from "react";
import Checkbox from "../UI/Checkbox";
const TodoList = (props) => {
  // const taskCrossOutHandler = (e) =>{
  // if(e.target.checked){

  // }
  // }
  return (
    <ul className={props.className}>
      {props.data.map((item) => (
        <li
          key={item.id}
          className="mt-[10px] w-[540px] h-[64px] font-Josefin text-[18px] pl-[72px]
           m-auto pt-[21px] pb-[24px] rounded-t-[5px]
          border-solid  border-b-2  border-gray-200 leading-[18px] bg-white relative  "
        >
          {item.listItem}
          <Checkbox
            // onClick={taskCrossOutHandler}
            id="check-box"
            className="appearance-none w-[24px] h-[24px] border-2 rounded-3xl cursor-pointer border-defaultCheckbox absolute top-[16px] left-[23px]"
          />
        </li>
      ))}
      <li
        className="w-[540px] m-auto pt-[18px] pb-[20px] text-gray-500 pl-[24px] font-Josefin text-[14px]
       leading-[14px] border-solid rounded-b-[5px]
        border-gray-200 bg-white"
      >
        <span className=" hover:text-blue-500 cursor-pointer">
          {" "}
          {props.data.length} items left
        </span>
        <span className="pl-[96px]  hover:text-blue-500 cursor-pointer">
          All
        </span>
        <span className="pl-[19px] hover:text-blue-500 cursor-pointer">
          Active{" "}
        </span>
        <span className="pl-[19px] hover:text-blue-500 cursor-pointer">
          Completed
        </span>
        <span className="pl-[56px] hover:text-blue-500 cursor-pointer">
          Clear Completed
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
