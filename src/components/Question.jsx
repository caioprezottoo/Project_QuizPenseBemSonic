import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

import Option from './Option.jsx';

import './Question.css';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        })
    }

    return (
        <div id="questiondiv">

            <object data="https://drive.google.com/file/d/10QNqd-pkV7OfWRyIos4VDBhv6BU2pyqB/preview" type="application/pdf" width="650vw" height="450vh"></object>
            <div id="question">
                <h2>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</h2>
                <div id='show'>
                    <p>Tentativa: {quizState.tentativa}</p>
                    <button id='buttonsdiv' onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
                </div>
                <div id="options-container">
                    {currentQuestion.options.map((option) => (
                        <Option
                            option={option}
                            key={option}
                            answer={currentQuestion.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Question