import React, { useState } from "react";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";
import Division from "./Division";
import Addition from "./Addition";

const Calculator = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <>
      <h1>Calculator App</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        onChange={(e) => setX(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        onChange={(e) => setY(Number(e.target.value))}
      />

      <hr />

      <Addition x={x} y={y} />
      <Subtraction x={x} y={y} />
      <Multiplication x={x} y={y} />
      <Division x={x} y={y} />
    </>
  );
};

export default Calculator;