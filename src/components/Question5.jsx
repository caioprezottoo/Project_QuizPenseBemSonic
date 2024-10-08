import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

import Option from './Option.jsx';

import './Question.css';

const Question3 = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion3 = quizState.questions3[quizState.currentQuestion3];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion3.answer, option },
        })
    }

    return (
        <div id="questiondiv">

            <object data="https://drive.google.com/file/d/12HEO6evTicPHUcvoVuVmkhkRX8bvE_jA/preview" type="application/pdf" width="650vw" height="450vh"></object>
            <div id="question">
                <h2>Pergunta {quizState.currentQuestion3 + 1} de {quizState.questions3.length}</h2>
                <div id='show'>
                    <p>Tentativa: {quizState.tentativa}</p>
                    <button id='buttonsdiv' onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
                </div>
                <div id="options-container">
                    {currentQuestion3.options.map((option) => (
                        <Option
                            option={option}
                            key={option}
                            answer={currentQuestion3.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Question3