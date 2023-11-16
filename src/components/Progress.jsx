import { useSelector } from "react-redux";

export const Progress = () => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const questionsLength = useSelector((state) => state.quiz.questions);

  return (
    <p>
      You are at question {index + 1} / {questionsLength.length}
    </p>
  );
};
