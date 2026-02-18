import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { GameProvider } from "./context/GameContext";


console.log("ANSWER: console_is_key");

/* id 12 Clue: Check localStorage key 'Treasure' for the answer */
console.log("id:12 Check localStorage key 'Treasure'");
// id 12 Answer stored in localStorage
localStorage.setItem('Treasure', 'M090');   
sessionStorage.setItem('Treasure', 'M090');

// id 16 Answer
console.log("id:16 final_console_flag");
// id 17 
localStorage.setItem("id:17", "Check CSS :root variables (For index.css go to source tab navigate to assets/index.css if code is not visible just refresh without closing anything.)");
console.log("id:21  Check the value of localStorage key hard1_final");
localStorage.setItem("hard1_final", "inspect_chain");


console.log("id:20 Search for attribute data-secret in Elements");


console.log("id:25-STEP1: Check CSS variable root25");

window.runSecret = function () {
  console.log("inspect_execute");
};


localStorage.setItem("hard7","chain_complete");


localStorage.setItem('hard29_clue','Find element with button id=finalBtn in elements tab');


window.unlockFinal=function(){
    console.log('inspect_exec_final');
}



ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <HashRouter >
      <GameProvider>
        <App />
      </GameProvider>
    </HashRouter>
  </React.StrictMode>
);
