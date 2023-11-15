import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionView = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div>
      <h1>Question: {question?.question}</h1>
      <button onClick={handleClick}>NÄSTA</button>
    </div>
  );
};
