import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
export const Timer = ({ timer }) => {
  return <span>00:{timer}</span>;
};
