import { SummaryAccordion } from "./SummaryAccordion"
import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";

export const SummaryMain = () => {
    const dispatch = useDispatch();
    const restartQuiz = () => {
      dispatch(quiz.actions.restart());
    };
    const newQuiz = () => {
      location.reload();
    };
  return (
    <section className="summary-container">
    <SummaryAccordion />
      <button onClick={restartQuiz}>Try again!</button>
      <button onClick={newQuiz}>Try new quiz</button>
    </section>
  )
}
