import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

export default function Result() {
  const navigate = useNavigate();
  const { timeLeft, MAX_TIME, setStarted, setCompleted, setTimeLeft } = useGame();

  const success = timeLeft > 0;

  const handleRestart = () => {
    // 🔥 Clear all session-based game data
    sessionStorage.clear();

    // 🔁 Reset global game state
    setStarted(false);
    setCompleted(false);
    setTimeLeft(MAX_TIME);

    // 🏠 Go back to home page
    navigate("/");
  };

  return (
    <div className="result">
      {success ? (
        <>
          <h1>🎉 Congratulations!</h1>
          <p>You completed the challenge with <b>{timeLeft}</b> seconds left.</p>
        </>
      ) : (
        <>
          <h1>⏱ Time’s Up!</h1>
          <p>Better luck next time.😉</p>
        </>
      )}

      <button
        onClick={handleRestart}
        className="start-btn"
        style={{ margin: "32px 650px" }}
      >
        Restart Challenge
      </button>
    </div>
  );
}
