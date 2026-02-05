import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

export default function Result() {
  const navigate = useNavigate();
  const { timeLeft, MAX_TIME, setStarted, setCompleted, setTimeLeft, correctCount, incorrectCount, resetScore } = useGame();

  const success = timeLeft > 0;
  const timeTaken = MAX_TIME - timeLeft;
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  const handleRestart = () => {
    // 🔥 Clear all session-based game data
    sessionStorage.clear();

    // 🔁 Reset global game state
    setStarted(false);
    setCompleted(false);
    setTimeLeft(MAX_TIME);
    resetScore();

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
          <h1>⏱ Time's Up!</h1>
          <p>Better luck next time.😉</p>
        </>
      )}

      {/* Score Card */}
      <div className="score-card">
        <h2>Score Summary</h2>
        <div className="score-item">
          <span className="label">Correct Answers:</span>
          <span className="value correct">{correctCount}</span>
        </div>
        <div className="score-item">
          <span className="label">Incorrect Answers:</span>
          <span className="value incorrect">{incorrectCount}</span>
        </div>
        <div className="score-item">
          <span className="label">Time Taken:</span>
          <span className="value">{minutes}m {seconds}s</span>
        </div>
      </div>

      <button
        onClick={handleRestart}
        className="start-btn"
        style={{ margin: "32px auto" }}
      >
        Restart Challenge
      </button>
    </div>
  );
}
