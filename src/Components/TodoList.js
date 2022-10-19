import React from "react";
import ListItem from "./ListItem";
const TodoList = (props) => {
  return (
    <ul className={props.className}>
      {props.data.map((item) => (
        <ListItem
          key={item.id}
          value={item}
          onDeleteTodo={props.onDeleteTodo}
          onChangeStatus={props.onChangeStatus}
        />
      ))}
      <li
        className="w-[540px] m-auto pt-[18px] pb-[20px] text-gray-500 pl-[24px] font-Josefin text-[14px]
       leading-[14px] border-solid rounded-b-[5px]
        border-gray-200 bg-white shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:bg-[#25273d] dark:shadow-none"
      >
        <span className=" hover:text-blue-500 cursor-pointer">
          {" "}
          {props.data.length} items left
        </span>
        <span
          className="pl-[96px]  hover:text-blue-500 cursor-pointer active:text-[#494c6b] dark:active:text-[#e3e4f1]"
          onClick={props.onRenderAll}
        >
          All
        </span>
        <span
          className="pl-[19px] hover:text-blue-500 cursor-pointer active:text-[#494c6b] dark:active:text-[#e3e4f1]"
          onClick={props.onRenderActives}
        >
          Active{" "}
        </span>
        <span
          className="pl-[19px] hover:text-blue-500 cursor-pointer active:text-[#494c6b] dark:active:text-[#e3e4f1]"
          onClick={props.onRenderCompleted}
        >
          Completed
        </span>
        <span
          className="pl-[56px] hover:text-blue-500 cursor-pointer active:text-[#494c6b] dark:active:text-[#e3e4f1]"
          onClick={props.onDeleteCompleted}
        >
          Clear Completed
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
