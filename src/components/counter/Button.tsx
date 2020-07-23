import React from "react";

type ButtonProps = {
  label: string;
  onClick: ()=> void
};

const Button: React.FC<ButtonProps> = (props) =>{
  return (
    <>
      <button onClick={props.onClick}>{props.label}</button>;
    </>
  )
}

export default Button;