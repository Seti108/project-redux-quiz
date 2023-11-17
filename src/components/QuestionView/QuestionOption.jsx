import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { useEffect, useState } from "react";
import checkIcon from "../../assets/icons/check_FILL0_wght400_GRAD0_opsz24.svg";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";

export const QuestionOption = ({ text, id, answerIndex }) => {
  const index = useSelector((state) => state.quiz.currentQuestionIndex);
  const answer = useSelector((state) => state.quiz.answers[index]);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const disableOptions = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => (option.disabled = true));
  };
  const handleOption = () => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: id, answerIndex: answerIndex })
    );
    setSelected(true);
    disableOptions();
  };

  return (
    <div key={text} className={`question-option ${selected ? "selected" : ""}`}>
      {answer ? (
        <>
          <span>{text}</span>
          {answerIndex === answer.question.correctAnswerIndex && (
            <div className="answer-checkbox answer-correct">
              <img src={checkIcon} alt="" />
            </div>
          )}
          {selected && !answer?.isCorrect && (
            <div className="answer-checkbox answer-incorrect">
              <img src={closeIcon} alt="" />
            </div>
          )}
        </>
      ) : (
        <>
          <input
            type="radio"
            id={text}
            className="option"
            name={text}
            value={text}
            onChange={handleOption}
            checked={selected}
            // disabled={selected}
          />
          <label htmlFor={text}>{text}</label>
        </>
      )}
    </div>
  );
};
{
  /* {selected && isCorrect && <div className="answer-correct"></div>}
      {selected && !isCorrect && <div className="answer-incorrect"></div>} */
}

{
  /* <>
<div className={`question-option ${selected ? "selected" : ""}`}>
  <input
    type="radio"
    id={text}
    className="option"
    name={text}
    value={text}
    onChange={handleOption}
    checked={selected}
    disabled={selected}
  />
  <label htmlFor={text}>{text}</label>
</div>
</> */
}
