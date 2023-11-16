import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  return <button onClick={handleClick}>Next question</button>;
};
