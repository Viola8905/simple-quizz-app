import React from "react";
import { QuizData } from "../QuizData";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div>
      <Row className="justify-content-center px-4">
        {QuizData.map((item) => {
          return (
            <Col md={4} key={0} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={item.quizzTheory.image}
                    style={{ maxHeight: "200px" }}
                  />
                  <Card.Title>{item.previewData.title}</Card.Title>
                  <Button variant="primary">
                    <Link to={`/quizTheory/${item.id}`}>Start a Quizz</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HeroPage;
