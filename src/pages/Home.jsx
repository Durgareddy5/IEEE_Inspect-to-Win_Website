import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

// Logos
import CbitLogo from "../assets/IEEE CBIT LOGO.jpg.jpeg";
import AessLogo from "../assets/IEEE AESS LOGO.png";
import EdSocLogo from "../assets/IEEE EdSoc LOGO.png";
import PesLogo from "../assets/IEEE PES LOGO.png";
import RasLogo from "../assets/IEEE RAS LOGO.png";

export default function Home() {
  const navigate = useNavigate();
  const { setStarted, resetScore } = useGame();

  const startGame = () => {
    resetScore();
    setStarted(true);
    navigate("/game");
  };

  return (
    <div className="home">
      <div className="logo-header">
        {/* Main Head Logo */}
        <div className="main-logo-container">
          <img src={CbitLogo} alt="IEEE CBIT" className="main-logo" />
        </div>

        {/* Sub Societies */}
        <div className="sub-logos-container">
          <img src={AessLogo} alt="IEEE AESS" className="sub-logo" />
          <img src={EdSocLogo} alt="IEEE EdSoc" className="sub-logo" />
          <img src={PesLogo} alt="IEEE PES" className="sub-logo" />
          <img src={RasLogo} alt="IEEE RAS" className="sub-logo" />
        </div>
      </div>

      <h1>🔍 Inspect to Win</h1>

      <p>
        A fast-paced interactive event where your debugging skills are tested.
        Use Inspect Element, DevTools, React DevTools, and logic to uncover hidden clues.
      </p>

      <ul>
        <li>⏱ Max Time: 15 Minutes</li>
        <li>🔀 Questions & options are randomized</li>
        <li>🛠 DevTools allowed & encouraged</li>
      </ul>

      <button onClick={startGame} className="start-btn">
        Start Challenge
      </button>
    </div>
  );
}
