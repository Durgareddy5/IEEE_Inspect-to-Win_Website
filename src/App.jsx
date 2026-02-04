import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Result from "./pages/Result";
import ApiDocs from "./pages/docs/ApiDocs";
import DeprecatedDocs from "./pages/docs/DeprecatedDocs";
import SessionLogs from "./pages/logs/SessionLogs";
import Experimental from "./pages/playground/Experimental";
import Settings from "./pages/profile/Settings";
import NotFoundUseful from "./pages/NotFoundUseful";
import Timer from "./components/Timer";
import { useGame } from "./context/GameContext";

export default function App() {
  const { started } = useGame();

  return (
    <>
      {started && <Timer />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />

        {/* Maze Pages */}
        <Route path="/docs/api" element={<ApiDocs />} />
        <Route path="/docs/deprecated" element={<DeprecatedDocs />} />
        <Route path="/logs/session" element={<SessionLogs />} />
        <Route path="/playground/experimental" element={<Experimental />} />
        <Route path="/profile/settings" element={<Settings />} />

        {/* Sneaky */}
        <Route path="/404-not-found-but-useful" element={<NotFoundUseful />} />
      </Routes>
    </>
  );
}
