import React from "react";


function Input(props) {
  return (
    
      <input
      className="w-full h-9 pl-3 border border-slate-300 hover:border-indigo-300 text-xs  pr-10"
      type={props.type}
      name={props.name}
      placeholder={props.holder}
      required="require"
      disabled={props.disabled}
      value={props.value}
    />

  
  );
}

export default Input;
