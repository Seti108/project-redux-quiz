import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { QuestionMain } from "./QuestionMain";
import { QuestionHeader } from "./QuestionHeader";
import "./QuestionView.css";

export const QuestionView = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // console.log(useSelector((state) => state.quiz.answers));

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
