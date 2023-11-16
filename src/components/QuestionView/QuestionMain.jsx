import { useSelector } from "react-redux";
import { QuestionOption } from "./QuestionOption";
import { QuestionButton } from "./QuestionButton";

export const QuestionMain = () => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const options = useSelector((state) => state.quiz.questions[index]);
  return (
    <section className="question-options">
      <form className="answer-form">
        {options.options.map((option, index) => {
          const id = options.id;
          return (
            <QuestionOption key={index} id={id} index={index} text={option} />
          );
        })}
      </form>
      <QuestionButton />
    </section>
  );
};
