import { useContext } from 'react'
import { QuizContext } from './context/quiz.jsx'

import Welcome from './components/Welcome.jsx'
import Books from './components/Books.jsx'
import Question from './components/Question.jsx'
import GameOver from './components/GameOver.jsx'
import Question2 from './components/Question2.jsx'
import Question3 from './components/Question3.jsx'
import Question4 from './components/Question4.jsx'
import Question5 from './components/Question5.jsx'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Books" && <Books />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "Playing2" && <Question2 />}
      {quizState.gameStage === "Playing3" && <Question3 />}
      {quizState.gameStage === "Playing4" && <Question4 />}
      {quizState.gameStage === "Playing5" && <Question5 />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
