import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { QuestionMain } from "./QuestionMain";
import { Progress } from "../Progress";

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
      <Progress />
      <h1>Question: {question?.question}</h1>
      <QuestionMain />
      <button onClick={handleClick}>NÄSTA</button>
    </div>
  );
};
