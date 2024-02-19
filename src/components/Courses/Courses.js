import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCards";
import Particle from "../Particle";
import leaf from "../../Assets/Courses/leaf.png";
import emotion from "../../Assets/Courses/emotion.png";
import editor from "../../Assets/Courses/codeEditor.png";
import chatify from "../../Assets/Courses/chatify.png";
import suicide from "../../Assets/Courses/suicide.png";
import bitsOfCode from "../../Assets/Courses/blog.png";

function Courses() {
  return (
    <Container fluid className="course-section">
      <Particle />
      <Container>
        <h1 className="course-heading">
          Our <strong className="purple">Courses </strong>
        </h1>
        <p style={{ color: "white" }}>
          are perfectly tailored to meet industry needs
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="course-card">
            <CourseCard
              imgPath={chatify}
              isBlog={false}
              title="Full Stack Software Engineering"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Backend Developer"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              imgPath={editor}
              isBlog={false}
              title="Web Frontend Developer"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              imgPath={leaf}
              isBlog={false}
              title="Software Testing"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              imgPath={suicide}
              isBlog={false}
              title="Android App Development"
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              imgPath={emotion}
              isBlog={false}
              title="IOS App Development"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;
