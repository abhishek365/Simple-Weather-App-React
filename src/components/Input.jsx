import { React } from "react";

function Input(props) {
  return (
    <input
      ref={props.inputRef}
      type="text"
      placeholder="Enter City"
      onChange={props.onChange}
      className="input-field"
    />
  );
}

export default Input;
