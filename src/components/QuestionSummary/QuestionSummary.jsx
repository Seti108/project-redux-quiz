import { SummaryMain } from "./SummaryMain";
import { SummaryHeader } from "./SummaryHeader";
import "./QuestionSummary.css"

export const QuestionSummary = () => {
  const time = useSelector((state) => state.quiz.time);
  return (
  <section className="summary-container">
    <SummaryHeader />
   <SummaryMain />
   <h2>You took: {time.toFixed(0)} seconds to finish the quiz</h2>
    </section>
  );
};
