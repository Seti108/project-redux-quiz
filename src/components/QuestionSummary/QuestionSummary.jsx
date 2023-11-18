import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionSummary = () => {
  const time = useSelector((state) => state.quiz.time);
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
      <h2>You took: {time.toFixed(0)} seconds to finish the quiz</h2>
    </div>
  );
};
