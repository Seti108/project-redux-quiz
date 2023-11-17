import { useSelector } from "react-redux";
import { QuestionOption } from "./QuestionOption";
import { QuestionButton } from "./QuestionButton";

export const QuestionMain = () => {
  // const answers = useSelector((state) => state.quiz.answers);
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const options = useSelector((state) => state.quiz.questions[index]);

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
