import { QuestionView } from "./QuestionView/QuestionView";
import { QuestionSummary } from "./QuestionSummary/QuestionSummary";
import { StartHome } from "./StartHome/StartHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { quiz } from "../reducers/quiz";

export const StartView = () => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  return (
    <main>
      {quizOver ? (
        <QuestionSummary />
      ) : (
        <>
          {index >= 0 && <QuestionView />}
          {index < 0 && <StartHome />}
        </>
      )}
    </main>
  );
};
