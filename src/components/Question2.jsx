import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

import Option from './Option.jsx';

import './Question.css';

const Question2 = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion2 = quizState.questions2[quizState.currentQuestion2];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion2.answer, option },
        })
    }

    return (
        <div id="questiondiv">

            <object data="https://drive.google.com/file/d/1HtU3mgzma3qz9M9EFSvowYMjVcg_AeYL/preview" type="application/pdf" width="650vw" height="450vh"></object>
            <div id="question">
                <h2>Pergunta {quizState.currentQuestion2 + 1} de {quizState.questions2.length}</h2>
                <div id='show'>
                    <p>Tentativa: {quizState.tentativa}</p>
                    <button id='buttonsdiv' onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
                </div>
                <div id="options-container">
                    {currentQuestion2.options.map((option) => (
                        <Option
                            option={option}
                            key={option}
                            answer={currentQuestion2.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Question2