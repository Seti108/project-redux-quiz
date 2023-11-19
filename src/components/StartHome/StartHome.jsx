import { useDispatch } from "react-redux";
import { quiz } from "../../reducers/quiz";
import trophyIcon from "../../assets/gold-trophy-icon.svg";
import starPattern from "../../assets/star-pattern.svg";
import "./StartHome.css";

export const StartHome = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  let backgroundStyle = { backgroundImage: `url(${starPattern})` };

  return (
    <section className="home-container">
      <div className="home-header" style={backgroundStyle}>
        <div className="home-header-wrapper">
          <img src={trophyIcon} />
          <h1>
            Trivia<span className="h1-span">Champ</span>
          </h1>
        </div>
      </div>
      <div className="home-wrapper">
        <p>
          Challange yourself in this varied question quiz. The clock is ticking,
          so keep it snappy! Good luck!
        </p>
        <button className="home-button" onClick={handleClick}>
          Become the new champ!
        </button>
      </div>
    </section>
  );
};
