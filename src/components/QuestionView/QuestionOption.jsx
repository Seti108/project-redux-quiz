import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const QuestionOption = ({ text, id, index }) => {
  const dispatch = useDispatch();
  const handleOption = (e) => {
    // const { id, index } = e.target;
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <>
      <input type="radio" id={text} name="answers" onChange={handleOption} />
      <label htmlFor={text}>{text}</label>
    </>
  );
};
{
  /* <label>
		<input
		type="radio"
		value="0 - 18"
		onChange={event => setAgeGroup(event.target.value)}
		checked={ageGroup === "0 - 18"}
		/>
		0 - 18
		</label> */
}
