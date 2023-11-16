import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { QuestionMain } from "./QuestionMain";
import { QuestionHeader } from "./QuestionHeader";

export const QuestionView = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <QuestionHeader />
      <QuestionMain />
    </>
  );
};
