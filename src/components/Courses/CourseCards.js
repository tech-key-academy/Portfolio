import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CourseCards(props) {
  return (
    <Card className="course-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br></br>
        <Card.Body>{props.body}</Card.Body>
        <br></br>
        <Button href="https://forms.gle/tSmhxNwx6B1E9hFo7"> APPLY </Button>
      </Card.Body>
    </Card>
  );
}
export default CourseCards;
