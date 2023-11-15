import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionSummary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  console.log(answers);
  const dispatch = useDispatch();
  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  };
  const newQuiz = () => {
    location.reload();
  };

  return (
    <div>
      <button onClick={restartQuiz}>Try again!</button>
      <button onClick={newQuiz}>Try new quiz</button>
    </div>
  );
};
