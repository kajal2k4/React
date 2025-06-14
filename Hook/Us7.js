// Task-3

// Write a program to build React app to perform the tasks as asked below.

// Add three buttons “Change Text”, “Change Color”, “Hide/Show”.

// Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.

// By clicking on “Change text” button text should be changed to “Welcome students” and vice versa.

// By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button.

// Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown

import React, { useState } from "react";

export default function Us7() {
  const [text, setText] = useState("LJ University");
  const [style, setStyle] = useState("red");
  const [text1, setText1] = useState("Hide");
  const [show, setShow] = useState(true);

  function hc() {
    setText("Welcome Students");
  }
  function hc1() {
    setStyle("blue");
  }
  function hc2() {
    setShow((i) => !i);
    setText1("Show");
  }

  return (
    <>
      <h1 style={{ color: style }}>{text}</h1>
      {show && <h2>React Js Hooks</h2>} 
      <button onClick={hc}>ChangeText</button>
      <button onDoubleClick={hc1}>ChangeColor</button>
      <button onClick={hc2}>{text1}</button>
    </>
  );
}
