import AnswerBox from "./AnswerBox"
import QuestionBox from "./QuestionBox"

const QuestionAnswer = (props) =>{
    return (
        <QuestionBox question={props.question}>
            <AnswerBox answer={props.answer} />
        </QuestionBox>
    )
}

export default QuestionAnswer;
