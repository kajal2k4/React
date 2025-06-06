// Create react app which takes user defined inputs number 1 and number 2 and perform addition, subtraction, multiplication, division of the numbers. (Use useState hook and then useReducer) 
import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [res, setRes] = useState("");

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setRes("Enter valid numbers");
      return;
    }

    if (op === "/" && b === 0) {
      setRes("Cannot divide by zero");
      return;
    }

    let result;
    if (op === "+") {
      result = a + b;
    } else if (op === "-") {
      result = a - b;
    } else if (op === "*") {
      result = a * b;
    } else if (op === "/") {
      result = a / b;
    }

    setRes(result);
  };

  return (
    <div>
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
        type="number"
      />
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
        type="number"
      />
      <div>
        <button onClick={() => calculate("+")}>Add</button>
        <button onClick={() => calculate("-")}>Subtract</button>
        <button onClick={() => calculate("*")}>Multiply</button>
        <button onClick={() => calculate("/")}>Divide</button>
      </div>
      <h3>Result: {res}</h3>
    </div>
  );
}
