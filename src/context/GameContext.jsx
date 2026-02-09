import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const MAX_TIME = 900; // 15 min

  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = sessionStorage.getItem("timeLeft");
    return stored ? Number(stored) : MAX_TIME;
  });

  const [started, setStarted] = useState(() => {
    return sessionStorage.getItem("started") === "true";
  });

  const [completed, setCompleted] = useState(() => {
    return sessionStorage.getItem("completed") === "true";
  });

  const [paused, setPaused] = useState(() => {
    return sessionStorage.getItem("paused") === "true";
  });

  const [iceActive, setIceActive] = useState(() => {
    return sessionStorage.getItem("iceActive") === "true";
  });

  const [iceStage, setIceStage] = useState(() => {
    const stored = sessionStorage.getItem("iceStage");
    return stored ? Number(stored) : 0;
  });

  // Total paused time in milliseconds
  const [pausedTime, setPausedTime] = useState(() => {
    const stored = sessionStorage.getItem("pausedTime");
    return stored ? Number(stored) : 0;
  });

  // Store pause start timestamp
  const [pauseStart, setPauseStart] = useState(() => {
    const stored = sessionStorage.getItem("pauseStart");
    return stored ? Number(stored) : null;
  });

  /* -------------------------------
     SAVE EVERYTHING
  -------------------------------- */
  useEffect(() => {
    sessionStorage.setItem("timeLeft", timeLeft);
    sessionStorage.setItem("started", started);
    sessionStorage.setItem("completed", completed);
    sessionStorage.setItem("paused", paused);
    sessionStorage.setItem("iceActive", iceActive);
    sessionStorage.setItem("iceStage", iceStage);
    sessionStorage.setItem("pausedTime", pausedTime);

    if (pauseStart !== null) {
      sessionStorage.setItem("pauseStart", pauseStart);
    } else {
      sessionStorage.removeItem("pauseStart");
    }
  }, [
    timeLeft,
    started,
    completed,
    paused,
    iceActive,
    iceStage,
    pausedTime,
    pauseStart
  ]);

  /* -------------------------------
     TIMER LOGIC
  -------------------------------- */
  useEffect(() => {
    if (!started || completed || paused) return;

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
  }, [started, completed, paused]);

  /* -------------------------------
     TRACK PAUSE START/END TIME
  -------------------------------- */
  useEffect(() => {
    // When pause starts
    if (paused && pauseStart === null) {
      setPauseStart(Date.now());
    }

    // When pause ends
    if (!paused && pauseStart !== null) {
      const diff = Date.now() - pauseStart;
      setPausedTime((prev) => prev + diff);
      setPauseStart(null);
    }
  }, [paused, pauseStart]);


  return (
    <GameContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        started,
        setStarted,
        completed,
        setCompleted,
        MAX_TIME,

        paused,
        setPaused,

        iceActive,
        setIceActive,

        iceStage,
        setIceStage,

        pausedTime
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);