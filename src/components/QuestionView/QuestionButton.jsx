import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { quiz } from "../../reducers/quiz";

export const QuestionButton = () => {
  const [color, setColor] = useState("hidden");
  const [emoji, setEmoji] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const answer = useSelector((state) => state.quiz.answers[index]);

  useEffect(() => {
    setColor("hidden");
    if (answer) {
      if (answer?.isCorrect) {
        setColor("answer-correct");
        setEmoji("😎");
      } else if (!answer?.isCorrect) {
        setColor("answer-incorrect");
        setEmoji("🥺");
      }
    } else return;
  }, [answer]);

  return (
    <button className={`btn-next ${color}`} onClick={handleClick}>
      Next question {emoji}
    </button>
  );
};
