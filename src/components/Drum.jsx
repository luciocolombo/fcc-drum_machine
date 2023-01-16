import React from "react";

function Drum(props) {
   const { letter, sound } = props;
   return (
      <button id={letter + "button"} className="drum-pad btn btn-secondary m-1 col-1" onClick={() => playSound(letter)}>
         <audio id={letter.toUpperCase()} className="clip" src={sound}></audio>
         {letter.toUpperCase()}
      </button>
   );
}

function playSound(letter) {
   document.getElementById(letter + "button").firstChild.play();
   const audioEl = document.getElementById(letter.toUpperCase());
   document.getElementById("display").innerText = audioEl.src.split("/").pop();
}

export default Drum;
