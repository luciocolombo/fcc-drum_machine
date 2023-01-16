import Drum from "./components/Drum";
import sounds from "./sounds";
import { React, useEffect } from "react";

function App() {
   const lettersArray = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
   useEffect(() => {
      window.addEventListener("keydown", (event) => handleKeydown(event, lettersArray));
   });
   return (
      <div className="App container w-50 align-items-center d-flex" id="drum-machine">
         <div className="row" id="mainDiv">
            <div className="col">
               {lettersArray.map((letter, i) => (
                  <Drum letter={letter} sound={sounds[i]} key={i} />
               ))}
            </div>

            <div className="col text-center align-self-center bg-light" id="display">
               Press a drum!
            </div>
         </div>
      </div>
   );
}

function handleKeydown(event, lettersArray) {
   const pressedLetter = event.key.toUpperCase();
   const isLetterValid = lettersArray.includes(pressedLetter.toLowerCase());
   if (!isLetterValid) return;
   const audioEl = document.getElementById(pressedLetter);
   audioEl.play();

   document.getElementById("display").innerText = audioEl.src.split("/").pop();
}

export default App;
