import { useGame } from "../context/GameContext";

export default function Timer() {
  const { timeLeft } = useGame();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div data-flag="attr_secret" className="timer">
      ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
      <input type="hidden" value="superHidden777" id="hiddenKey"></input>
      <p style={{display:"none"}} title='inspect_title_key'>Hover Me</p>
    </div>
  );
}
