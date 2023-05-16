import React, { useState } from "react";
import { QuizData } from "../QuizData";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const quizzId = useParams().id;
  const Quizz = QuizData.find((item) => item.id == quizzId);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Quizz.quizzQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className="app">
      {showScore ? (
        <Container className="mt-5">
          <Row className="justify-content-center text-center">
            <Col xs={12}>
              <h4 className="score-section">
                You scored {score} out of {Quizz.quizzQuestions.length}
              </h4>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="d-flex justify-content-center mt-2">
              <Button variant="success" onClick={reloadPage}>
                Try again
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <h4>
                Question {currentQuestion + 1}/{Quizz.quizzQuestions.length}
              </h4>
              <p>{Quizz.quizzQuestions[currentQuestion].questionText}</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {Quizz.quizzQuestions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Col
                  xs={12}
                  md={6}
                  key={index}
                  className="mt-2 d-flex justify-content-center"
                >
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </Button>
                </Col>
              )
            )}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default QuizPage;
