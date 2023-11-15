import React from "react";

export const QuestionOption = ({ text }) => {
  return (
    <>
      <input disabled type="radio" id={text} name="answers" />
      <label for={text}>{text}</label>
    </>
  );
};
