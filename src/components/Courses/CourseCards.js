import React from "react";
import Card from "react-bootstrap/Card";

function CourseCards(props) {
  return (
    <Card className="course-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default CourseCards;
