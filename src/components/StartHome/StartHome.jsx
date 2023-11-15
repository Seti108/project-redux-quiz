import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const StartHome = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return <button onClick={handleClick}>NÄSTA</button>;
};
