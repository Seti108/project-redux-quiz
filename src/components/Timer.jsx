import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Timer = () => {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(countdown);
          return "00";
        }
      });
    }, 1000);
  }, []);
  return <span>00:{timer.toString().padStart(2, 0)}</span>;
};
