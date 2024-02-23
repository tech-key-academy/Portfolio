import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "rgb(155 126 172)" }}>
            "We are a bunch of techies working in different software
            organizations, in the strive to build a skilled next generation. we
            believe with proper mentoring, right set of skill and good practice,
            we can build a skilled resource pool for industry"
          </p>
          <footer className="blockquote-footer">Abhijit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
