import React from "react";
import {useDispatch, useSelector} from "react-redux";
import{ RootState } from "../../store";
import { incrementAction, decrementAction, resetAction } from "../../store/counter/actions";
import Button from "./Button";

export const Counter: React.FC = () =>{

  const currentCount = useSelector((state: RootState)=>state.counter);
  const dispatch = useDispatch();

  const handleIncrement =() =>{dispatch(incrementAction())};
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleReset = () => {
    dispatch(resetAction());
  };
  return (
    <>
      <div>{currentCount.value}</div>
      <Button label="Up" onClick={handleIncrement} />
      <Button label="Down" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
    </>
  );
};
