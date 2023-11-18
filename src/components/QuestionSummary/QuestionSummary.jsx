import { SummaryMain } from "./SummaryMain";
import { SummaryHeader } from "./SummaryHeader";
import "./QuestionSummary.css"

export const QuestionSummary = () => {
  return (
  <section className="summary-container">
    <SummaryHeader />
   <SummaryMain />
    </section>
  );
};
