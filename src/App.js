import Drum from "./components/Drum";
import sounds from "./sounds";
import { React, useEffect } from "react";

function App() {
   const lettersArray = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
   useEffect(() => {
      window.addEventListener("keydown", (event) => handleKeydown(event, lettersArray));
   });
   return (
      <div className="App container h-100" id="drum-machine">
         <div className="container row w-50" id="mainDiv">
            <div className="col-5">
               {lettersArray.map((letter, i) => (
                  <Drum letter={letter} sound={sounds[i]} key={i} />
               ))}
            </div>

            <div className="col-1" id="display"></div>
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
