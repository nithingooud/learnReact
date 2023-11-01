import "./App.css";
import { useState } from "react";

function State() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const changeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      {age} <button onClick={increaseAge}>Increase Age</button>
      <br></br>
      <br></br>
      <input type="text" onChange={changeInput} />
      {inputValue}
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      <h1>{showText && "My name is Nithin"}</h1>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}>My name is Nithin</h1>
    </div>
  );
}

export default State;
