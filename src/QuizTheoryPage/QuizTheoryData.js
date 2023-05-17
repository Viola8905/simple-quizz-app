import React from "react";
import { QuizData } from "../QuizData";
import { useParams } from "react-router-dom";

import { Button, Col, Container, Row } from "react-bootstrap";

const QuizTheoryData = () => {
	 const quizzId = useParams().id;
   const Quizz = QuizData.find((item) => item.id == quizzId);
  return <div className="app">Quizz.id</div>;
};

export default QuizTheoryData;
