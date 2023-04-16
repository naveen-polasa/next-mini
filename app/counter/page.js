"use client";

import { useTestContext } from "../context";

export default function page() {
  const { value, increaseVal, decreaseVal } = useTestContext();
  return (
    <div>
      <h3 className="text-3xl">value :{value}</h3>
      <p className="text-5xl flex gap-4 p-1">
        <button onClick={increaseVal}>+</button>
        <button onClick={decreaseVal}>-</button>
      </p>
    </div>
  );
}
