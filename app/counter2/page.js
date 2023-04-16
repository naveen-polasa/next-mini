"use client";

import { useDispatch, useSelector } from "react-redux";
import { decreaseVal, increaseVal, reset } from "../Redux/features/testSlice";

export default function page() {
  const { value } = useSelector((store) => store.test);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h3 className="text-3xl">value :{value}</h3>
      <p className="text-5xl flex gap-4 p-1">
        <button onClick={() => dispatch(increaseVal())}>+</button>
        <button onClick={() => dispatch(decreaseVal())}>-</button>
      </p>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
