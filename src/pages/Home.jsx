import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { buildGameQuestions } from "../utils/buildGameQuestions";

// export default function Home() {
//   const navigate = useNavigate();
//   const { setStarted, setCompleted, setTimeLeft, MAX_TIME } = useGame();

//   const handleStart = () => {
//     // Clear old session data
//     sessionStorage.clear();

//     // Fresh start time
//     sessionStorage.setItem("startTime", Date.now());

//     // Reset context
//     setStarted(true);
//     setCompleted(false);
//     setTimeLeft(MAX_TIME);

//     navigate("/game");
//   };


export default function Home() {
  const navigate = useNavigate();
  const { MAX_TIME, setStarted, setCompleted, setTimeLeft } = useGame();

  const handleStart = () => {
    // Clear old session
    sessionStorage.clear();

    // Generate fresh random questions
    const newQuestions = buildGameQuestions();

    // Save new question order
    sessionStorage.setItem("questionOrder", JSON.stringify(newQuestions));

    // Reset game stats
    sessionStorage.setItem("attempted", "0");
    sessionStorage.setItem("correctCount", "0");
    sessionStorage.setItem("incorrectCount", "0");

    // Reset game state
    setStarted(true);
    setCompleted(false);
    setTimeLeft(MAX_TIME);

    navigate("/game");
  };

  return (
    <div className="home">
       <div className="logos">
       <img height="100px"  src="IEEE EdSoc LOGO.png"></img>
       <img height="100px"  src="IEEE PES LOGO.png"></img>
       <img height="100px"  src="IEEE RAS LOGO.png"></img>
       <img height="100px"  src="IEEE AESS LOGO.png"></img>
       </div>
       <h1 id="header">Sudhee-2026 Udbhava 3.0</h1>
       <h1 id="header">Stratos</h1>
      <h3>🔍 Inspect To Win</h3>

      <p>
        Welcome to Inspect To Win! A fun debugging challenge where you must use
        DevTools, Inspect Element, and hidden clues across pages.
      </p>

      <ul>
        <li>⏱ Total time: 15 minutes</li>
        <li>🕵️ Find answers using Inspect Element, Console, and hidden pages</li>
        <li>🎭 Chill breaks will appear automatically</li>
        <li>🏆 Finish all questions before time runs out</li>
        <li>🚫 Using Third party apps are not Encouraged </li>
      </ul>
      <button className="start-btn" onClick={handleStart}>
        Start Challenge
      </button>
    </div>
  );
}

