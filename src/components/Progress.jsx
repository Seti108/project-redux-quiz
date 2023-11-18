import { useSelector } from "react-redux";
import flagOver from "../assets/flag-over.svg"

export const Progress = () => {
    const quizOver = useSelector((state) => state.quiz.quizOver);

    const questionLength= useSelector(
        (state) => state.quiz.questions.length
      );
      const questionIndex = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
      );
    console.log("id", questionIndex)
  return (
    <div className="progress-bar">
    {quizOver ? 
    
    <div><img src={flagOver}/>TRIVIA CHAMP</div>
    : ( <div>You are at question {questionIndex.id}/{questionLength}</div>)} 
    </div>
  )
}
