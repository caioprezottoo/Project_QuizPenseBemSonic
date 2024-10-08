import { createContext, useReducer } from "react";
import questions from '../data/questions'
import questions2 from '../data/questions2'
import questions3 from '../data/questions3'

const STAGES = ["Start", "Books", "Playing", "Playing2", "Playing3", "Playing4", "Playing5", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    questions2,
    questions3,
    currentQuestion: 0,
    currentQuestion2: 0,
    currentQuestion3: 0,
    tentativa: 1,
    score: 0,
};

import wrong from '../audio/wrong.wav'
import correct from '../audio/correct.wav'

const quizReducer = (state, action) => {


    switch (action.type) {

        case "BOOK_PAGE":
            return {
                ...state,
                gameStage: STAGES[1],
            }

        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[2],
            }

        case "CHANGE_STATE2":
            return {
                ...state,
                gameStage: STAGES[3],
            }

        case "CHANGE_STATE3":
            return {
                ...state,
                gameStage: STAGES[4],
            }
        case "CHANGE_STATE4":
            return {
                ...state,
                gameStage: STAGES[5],
            }
        case "CHANGE_STATE5":
            return {
                ...state,
                gameStage: STAGES[6],
            }

        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            const { answer, option } = action.payload;
            let { tentativa } = state;
            let verificador = false;
            let correctAnswer = 0;

            if (option === answer) {
                if (tentativa === 1) {
                    correctAnswer = 3;
                    tentativa = 1;
                    verificador = true;
                    new Audio(correct).play()
                } else if (tentativa === 2) {
                    correctAnswer = 2;
                    tentativa = 1;
                    verificador = true;
                    new Audio(correct).play()
                } else if (tentativa === 3) {
                    correctAnswer = 1;
                    tentativa = 1;
                    verificador = true;
                    new Audio(correct).play()
                }
            } else {
                tentativa++;
                if (tentativa > 3) {
                    verificador = true;
                    tentativa = 1;
                }
                new Audio(wrong).play()
            }

            let nextQuestion = state.currentQuestion + 1;
            let nextQuestion2 = state.currentQuestion2 + 1;
            let nextQuestion3 = state.currentQuestion3 + 1;
            let endGame = false;

            if (!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
                tentativa: tentativa,
                currentQuestion: verificador ? nextQuestion : state.currentQuestion,
                currentQuestion2: verificador ? nextQuestion2 : state.currentQuestion2,
                currentQuestion3: verificador ? nextQuestion3 : state.currentQuestion3,
                gameStage: endGame ? STAGES[7] : state.gameStage,
            };

        default:
            return state;
    }
}

export const QuizContext = createContext()
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};