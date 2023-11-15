import React from "react";
import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionSummary = () => {
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
