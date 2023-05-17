import React from "react";
import { QuizData } from "../QuizData";
import { Link, useParams } from "react-router-dom";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const QuizTheoryPage = () => {
  const quizzId = useParams().id;
  const Quizz = QuizData.find((item) => item.id.toString() === quizzId);
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", margin: "0 auto" }}
      >
        <Row>
          <Col xs={12}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={Quizz.quizzTheory.image}
                style={{ maxHeight: "300px" }}
              />
              <Card.Body>
                <Card.Title>{Quizz.quizzTheory.title}</Card.Title>
                <Card.Text>{Quizz.quizzTheory.theoryData}</Card.Text>
                <Button variant="primary">
                  <Link to={`/quizes/${Quizz.id}`}>Start a Quizz</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QuizTheoryPage;
