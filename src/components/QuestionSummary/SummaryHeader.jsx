import { Progress } from "../Progress";
import { Timer } from "../Timer";
import { useSelector } from "react-redux";

export const SummaryHeader = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const totalCorrectAnswers = answers.reduce(
    (total, { isCorrect }) => total + isCorrect,
    0
  );

  const totalAnswers = answers.length;
  console.log("header", totalCorrectAnswers);
  return (
    <div className="summary-header-container">
      <Progress />
      <div className="progress-timer-div">
        <div className="timer-div">
          <Timer />
        </div>
      </div>
      <div className="summary-header-content">
        <p>
          You got {totalCorrectAnswers}/{totalAnswers} answers correct!
        </p>
      </div>
    </div>
  );
};
