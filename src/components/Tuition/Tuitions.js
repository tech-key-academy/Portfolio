import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../Courses/CourseCards";
import Particle from "../Particle";
import leaf from "../../Assets/Courses/leaf.png";
import emotion from "../../Assets/Courses/emotion.png";
import editor from "../../Assets/Courses/codeEditor.png";
import chatify from "../../Assets/Courses/chatify.png";
import suicide from "../../Assets/Courses/suicide.png";
import bitsOfCode from "../../Assets/Courses/blog.png";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Tuitions() {
  return (
    <Container fluid className="course-section">
    <Particle />
    <Container>
      <h1 className="course-heading">
        We offer <strong className="purple">Tuition </strong>
      </h1>
      <p style={{ color: "white" }}>
        ensuing success in boards exam and also emphasizing on real life projects and problem solving.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="course-card">
          <CourseCard
            imgPath={chatify}
            isBlog={false}
            title="Class 11 - All Boards"
          />
        </Col>

        <Col md={4} className="course-card">
          <CourseCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="Class 12 - All Boards"
          />
        </Col>

        <Col md={4} className="course-card">
          <CourseCard
            imgPath={editor}
            isBlog={false}
            title="Computer Science Engineerning - B. Tech"
          />
        </Col>

        <Col md={4} className="course-card">
          <CourseCard
            imgPath={leaf}
            isBlog={false}
            title="Information Tehnology - B. Tech"
          />
        </Col>

        <Col md={4} className="course-card">
          <CourseCard
            imgPath={suicide}
            isBlog={false}
            title="Any non-IT Stream - IT Papers and Projects"
          />
        </Col>

        <Col md={4} className="course-card">
          <CourseCard
            imgPath={emotion}
            isBlog={false}
            title="CSE/IT Major and Minor Project"
          />
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default Tuitions;
