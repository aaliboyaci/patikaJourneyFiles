import React from "react";
import useGameLogic from "./useGameLogic";
import "./App.css";

function App() {
  const [
    textBoxRef,
    handleChange,
    text,
    timeRemaining,
    startGame,
    isTimeRunning,
    wordCount,
  ] = useGameLogic();
  return (
    <div>
      <h1>How many words can you type in 30 seconds?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
