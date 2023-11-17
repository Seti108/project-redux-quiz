import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Progress } from "../Progress";
import { Timer } from "../Timer";
import "./QuestionView.css";

export const QuestionHeader = () => {
  const [timer, setTimer] = useState(30);
  const [background, setBackground] = useState("purple-gradient");
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const answer = useSelector((state) => state.quiz.answers[index]);

  useEffect(() => {
    if (answer) {
      if (answer?.isCorrect) {
        setBackground("answer-correct");
      } else if (!answer?.isCorrect) {
        setBackground("answer-incorrect");
      }
    } else return;
  }, [answer]);

  return (
    <header className={`question-header ${background}`}>
      <div className="header-content">
        <div className="progress-timer-div">
          <Progress />
          <div className="timer-div">
            <Timer timer={timer} />
          </div>
        </div>
        <h1>{question?.question}</h1>
      </div>
    </header>
  );
};

// useEffect(() => {
//   const countdown = setInterval(() => {
//     setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : "00"));
//   }, 1000);

//   return () => {
//     clearInterval(countdown);
//   };
// });
