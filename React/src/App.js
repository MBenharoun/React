import React, { useState } from "react";
import Chrono from "./components/chrono";
import Metronome from "./components/Metronome";
import Game from "./components/tictactoe/Game";

const App = () => {

  return (
    <div>
      <Chrono/>
      <br/>
      Metronome
      <Metronome/>
      <br/>     
      Morpion
      <Game/>
    </div>
  
  );
};

export default App;
