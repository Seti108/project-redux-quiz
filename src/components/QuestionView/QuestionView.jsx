import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { QuestionMain } from "./QuestionMain";
import { Progress } from "../Progress";
import { QuestionHeader } from "./QuestionHeader";
import "./QuestionView.css";


export const QuestionView = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  useEffect(() => {
    return () => dispatch(quiz.actions.saveTime(Date.now()));
  }, []);
  return (
    <div>
      <QuestionHeader />
      <section className="questions">
        <QuestionMain />
      </section>
    </div>
  );
};
