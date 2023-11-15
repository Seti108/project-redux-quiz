import { useSelector } from "react-redux";
import { QuestionOption } from "./QuestionOption";

export const QuestionMain = () => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const options = useSelector((state) => state.quiz.questions[index].options);
  console.log(options);
  return (
    <form className="answer-form">
      {options.map((option) => (
        <QuestionOption text={option} />
      ))}
    </form>
  );
};
