import { useState, useRef } from "react";
import "./calculator.css";

export default function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
      // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
  }

  function resetInput(e) {
    // Add the code for the resetInput function
  }

  function resetResult(e) {
    // Add the code for the resetResult function
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onclick={minus}>subtract</button>
        <button onclick={times}>multiply</button>
        <button onclick={divide}>divide</button>
        <button onclick={resetInput}>Reset Input</button>
        <button onclick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

