import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Timer = () => {
  // const [timer, setTimer] = useState(0);
  const timer = useSelector((state) => state.quiz.time);
  const quizEnd = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();
  useEffect(() => {
    const count = setInterval(() => {
      if (quizEnd) {
        return clearInterval(count);
      } else {
        dispatch(quiz.actions.saveTime());
      }
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return <span>00:{timer.toString().padStart(2, 0)}</span>;
};
