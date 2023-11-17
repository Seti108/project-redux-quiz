import { useSelector } from "react-redux";
import { QuestionOption } from "./QuestionOption";
import { QuestionButton } from "./QuestionButton";

export const QuestionMain = () => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const options = useSelector((state) => state.quiz.questions[index]);
  const answer = useSelector((state) => state.quiz.answers[index]);

  // console.log(options);
  return (
    <section className="question-options">
      <form className="answer-form">
        {options.options.map((option, index) => {
          const id = options.id;
          return (
            <QuestionOption
              key={option}
              id={id}
              text={option}
              answerIndex={index}
            />
          );
        })}
      </form>
      <QuestionButton />
    </section>
  );
};
