import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Sonic from '../img/soniclogo.svg'

import './Books.css'

const Books = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="books">
            <img src={Sonic} alt="sonic logo" />
            <h3 id="final">Regras:</h3>
            <p>Para cada pergunta, o usuário terá 3 tentativas de resposta. </p>
            <p>- Caso acerte na 1ª tentativa, o usuário ganhará 3 pontos.</p>
            <p>- Caso acerte na 2ª tentativa, o usuário ganhará 2 pontos.</p>
            <p>- Caso acerte na 3ª tentativa, o usuário ganhará 1 ponto.</p>
            <p>- Caso não acerte em nenhuma das 3 tentativas, o usuário não ganhará pontos.</p>
            <h4>Ao final da resposta as 30 perguntas, o programa apresentará o total de pontos obtidos.</h4>
            <h2>SELECIONE O LIVRO PARA JOGAR:</h2>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>021</button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE2" })}>022</button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE3" })}>023</button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE4" })}>024</button>
            <button onClick={() => dispatch({ type: "CHANGE_STATE5" })}>025</button>
            
        </div>
    )
}

export default Books