import { useSelector } from "react-redux";

export const SummaryAccordion = () => {
    const answers = useSelector((state) => state.quiz.answers);
    (console.log(answers))
    return (
    <section className="summary-container">
      <div className="summary-header">
  
  
      </div>
      {answers.map(({answer, questionId, question}) => {
        return (
          <div key={questionId} className="question-container">
            <p>{question.question}</p>
          <p>your answer: {answer}</p>
          <p>correct answer: {question.options[question.correctAnswerIndex]}</p>
          </div>
        );
      })}
      </section>
  )
}
