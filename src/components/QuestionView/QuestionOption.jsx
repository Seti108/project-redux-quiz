import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionOption = ({ text, id, index }) => {
  const dispatch = useDispatch();
  const handleOption = (e) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <div className="question-option">
      <input type="radio" id={text} name="answers" onChange={handleOption} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};
