import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.value}
    </button>
  );
}

export default Button;
