import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './GameOver.css'
import gifsonic from '../img/sonic.gif'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>FIM DO LIVRO</h2>
            <img src={gifsonic} alt="sonic logo" />
            <p>Anéis ganhos: {quizState.score}</p>
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Ir para o ínicio</button>
        </div>
    )
}

export default GameOver