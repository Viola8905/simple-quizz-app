import React from "react";
import { QuizData } from "../QuizData";
import { Card, Col, Row } from "react-bootstrap";
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
                  <Card.Title>{item.previewData.title}</Card.Title>
                  <Link to={`/quizes/${item.id}`}>Start a Quizz</Link>
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
