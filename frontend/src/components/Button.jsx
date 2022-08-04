import React from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>
    {props.submit}
    
    </button>;
};

export default Button