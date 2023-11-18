import { useSelector } from "react-redux";
import CheckIcon from "../../assets/check-icon.svg"
import CrossIcon from "../../assets/cross-icon.svg"
import ExpandMore from "../../assets/expand-more-icon.svg"
import ExpandLess from "../../assets/expand-less-icon.svg"
import { useState } from "react";

export const SummaryAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const answers = useSelector((state) => state.quiz.answers);

  const handleAccordion = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <section>
    {answers.map(({answer, questionId, question, isCorrect}, index) => {

      // Check if question is expanded or not compared to index
      const QuestionExpanded = expanded === index;

      return (
        <div key={questionId} className="question-accordion-container">
          <div key={questionId} className="question-accordion-question-container">
          {isCorrect ? <div className="success"><img src={CheckIcon}></img></div> : <div className="failure"><img src={CrossIcon}></img></div>}
          <div key={questionId} className="question-accordion-wrapper">
        <div className="question-accordion-expanded" onClick={() => handleAccordion(index)}><p>{question.question}</p>
            <button>{QuestionExpanded ? <img src={ExpandMore}/> : <img src={ExpandLess}/>}</button>
            </div>
        </div>
        </div>
          {QuestionExpanded && (
            <>
            <p>Your answer: {answer}</p>
            <p>Correct answer: {question.options[question.correctAnswerIndex]}</p>
            </>
            )}
          </div>
      );
    })}
    </section>
)
}