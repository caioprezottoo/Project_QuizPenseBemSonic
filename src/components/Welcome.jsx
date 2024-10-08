import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Sonic from '../img/soniclogo.svg'

import './Welcome.css'

import themeAudio from '../audio/theme.wav'
let musicplaying = false;


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function display() {
    dispatch({type: "BOOK_PAGE"});
    if (!musicplaying) {
      new Audio(themeAudio).play()
      musicplaying = true;
    }
  }

  return (
    <div id="welcome">
      <img src={Sonic} alt="sonic logo" />
      <h2>PENSE BEM APRESENTA</h2>
      <h1>Uma Aventura Científica com Sonic</h1>
      <p>Clique no botão para começar:</p>
      <button onClick={display}>START GAME</button>
    </div>
  )
}

export default Welcome