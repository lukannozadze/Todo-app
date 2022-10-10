import React from "react";

const TodoList = (props) => {
  return (
    <ul className="mt-[10px] w-[540px] font-Josefin text-[18px] pl-[72px] m-auto pt-[21px] pb-[24px] ">
      {props.data.map((item) => (
        <li
          key={item.id}
          className="w-[100%] border-solid border-t-2 border-b-2  border-gray-200 "
        >
          {item.listItem}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
