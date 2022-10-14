import React from "react";
import escapeIconPath from "../images/escape-icon.png";
const EscapeButton = (props) => {
  return (
    <div>
      <img
        className={props.className}
        src={escapeIconPath}
        alt="two crossing rectangles"
        onClick={() => props.onDeleteTodo(props.id)}
      />
    </div>
  );
};

export default EscapeButton;
