import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const MAX_TIME = 900;

  const [started, setStarted] = useState(
    sessionStorage.getItem("started") === "true"
  );

  const [timeLeft, setTimeLeft] = useState(
    Number(sessionStorage.getItem("timeLeft")) || MAX_TIME
  );

  const [completed, setCompleted] = useState(
    sessionStorage.getItem("completed") === "true"
  );

  const [correctCount, setCorrectCount] = useState(
    Number(sessionStorage.getItem("correctCount")) || 0
  );

  const [incorrectCount, setIncorrectCount] = useState(
    Number(sessionStorage.getItem("incorrectCount")) || 0
  );

  // Persist state
  useEffect(() => {
    sessionStorage.setItem("started", started);
    sessionStorage.setItem("timeLeft", timeLeft);
    sessionStorage.setItem("completed", completed);
    sessionStorage.setItem("correctCount", correctCount);
    sessionStorage.setItem("incorrectCount", incorrectCount);
  }, [started, timeLeft, completed, correctCount, incorrectCount]);

  // Timer logic
  useEffect(() => {
    if (!started || completed) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, completed]);

  const incrementCorrect = () => setCorrectCount((c) => c + 1);
  const incrementIncorrect = () => setIncorrectCount((c) => c + 1);

  const resetScore = () => {
    setCorrectCount(0);
    setIncorrectCount(0);
    sessionStorage.setItem("correctCount", 0);
    sessionStorage.setItem("incorrectCount", 0);
  };

  return (
    <GameContext.Provider value={{
      timeLeft,
      setTimeLeft,
      started,
      setStarted,
      completed,
      setCompleted,
      correctCount,
      incorrectCount,
      incrementCorrect,
      incrementIncorrect,
      resetScore,
      MAX_TIME
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);


