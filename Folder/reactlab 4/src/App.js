function App() {
  function handleClick()
  {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number");
    alert(`Computer nunber : ${randomNum},Your Guess: ${userInput} `);
  }
  
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the Number between 1 and 3</button>
    </div>
  );
}

export default App;
