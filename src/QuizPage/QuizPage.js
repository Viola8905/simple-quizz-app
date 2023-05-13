import React, { useState } from "react";
import { QuizData } from "../QuizData";
import { Button, Col, Container, Row } from "react-bootstrap";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
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
                You scored {score} out of {QuizData.length}
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
                Question {currentQuestion + 1}/{QuizData.length}
              </h4>
              <p>{QuizData[currentQuestion].questionText}</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {QuizData[currentQuestion].answerOptions.map(
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
