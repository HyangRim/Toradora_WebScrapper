import React from "react";
import {Link} from 'react-router-dom'


import Ami from "./img/Ami.jpg"
import Minori from "./img/Minori.png"
import Taiga from "./img/Taiga.jpg"
import Ryuuji from "./img/Ryuuji.png"
import Yuusaku from "./img/Yuusaku.png"

import './App.css'

function Taigabutton(){
  const URL = "httP://" + window.location.hostname + ":3000/aisaka_taiga/1";
  window.location.href = URL;
}

function Ryuujibutton(){
  const URL = "httP://" + window.location.hostname + ":3000/takasu_ryuuji/1";
  window.location.href = URL;
}

function Minoributton(){
  const URL = "httP://" + window.location.hostname + ":3000/kushieda_minori/1";
  window.location.href = URL;
}

function Yuusakubutton(){
  const URL = "httP://" + window.location.hostname + ":3000/kitamura_yuusaku/1";
  window.location.href = URL;
}

function Amibutton(){
  const URL = "httP://" + window.location.hostname + ":3000/kawashima_ami/1";
  window.location.href = URL;
}

function App() {
  return (
    <div id = "Novel">
      <div id = "Toradora">
        <button onClick={Taigabutton}><img src={Taiga} alt=""></img></button>
        <button onClick={Ryuujibutton}><img src={Ryuuji} alt=""></img></button>
      </div>
      <div id = "Spinoff">
        <button onClick={Minoributton}><img src={Minori} alt=""></img></button>
        <button onClick={Yuusakubutton}><img src={Yuusaku} alt=""></img></button>
      </div>
      <button id="Ami_button" onClick={Amibutton}><img src={Ami} alt=""></img></button>
    </div>
  );
}

export default App;
