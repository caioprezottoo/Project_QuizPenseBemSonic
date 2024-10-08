import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Option.css';

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    
    if(option === "1"){
        return <div className= 'option' onClick={() => selectOption()}>
            <div id="opcao1">
                <p>{option}</p>
            </div>
        </div>
    } else if(option === "2"){
        return <div className= 'option' onClick={() => selectOption()}>
            <div id="opcao2">
                <p>{option}</p>
            </div>
        </div>
    } else if(option === "3"){
        return <div className= 'option' onClick={() => selectOption()}>
            <div id="opcao3">
                <p>{option}</p>
            </div>
        </div>
    } else if(option === "4"){
        return <div className= 'option' onClick={() => selectOption()}>
            <div id="opcao4">
                <p>{option}</p>
            </div>
        </div>
    }

}

export default Option