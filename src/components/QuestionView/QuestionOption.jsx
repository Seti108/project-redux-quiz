import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../reducers/quiz";
import { useEffect, useState } from "react";

export const QuestionOption = ({ text, id, index }) => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const disableOptions = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => (option.disabled = true));
  };
  const handleOption = (e) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setSelected(true);
    disableOptions();
  };

  const isCorrect = answers[index]?.isCorrect;

  return (
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
      {selected && isCorrect && <div className="answer-correct"></div>}
      {selected && !isCorrect && <div className="answer-incorrect"></div>}
    </div>
  );
};
