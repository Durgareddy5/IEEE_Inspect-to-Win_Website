import { useGame } from "../context/GameContext";

export default function Timer() {
  const { timeLeft } = useGame();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
