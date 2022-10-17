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
        border-gray-200 bg-white"
      >
        <span className=" hover:text-blue-500 cursor-pointer">
          {" "}
          {props.data.length} items left
        </span>
        <span
          className="pl-[96px]  hover:text-blue-500 cursor-pointer"
          onClick={props.onRenderAll}
        >
          All
        </span>
        <span
          className="pl-[19px] hover:text-blue-500 cursor-pointer"
          onClick={props.onRenderActives}
        >
          Active{" "}
        </span>
        <span
          className="pl-[19px] hover:text-blue-500 cursor-pointer"
          onClick={props.onRenderCompleted}
        >
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
