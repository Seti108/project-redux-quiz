import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Progress } from "../Progress";
import { Timer } from "../Timer";
import "./QuestionView.css";

export const QuestionHeader = () => {
  const [timer, setTimer] = useState(30);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  //   const dispatch = useDispatch();

  //   const totalTime = useSelector((state) => state.quiz.time);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : "00"));
    }, 1000);

    return () => {
      clearInterval(countdown);
      console.log("Unmount");
    };
  });
  return (
    <header className="question-header purple-gradient">
      <div className="progress-timer-div">
        <Progress />
        <div className="timer-div">
          <Timer timer={timer} />
        </div>
      </div>
      <h1>{question?.question}</h1>
    </header>
  );
};
