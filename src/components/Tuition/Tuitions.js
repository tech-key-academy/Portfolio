import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../Courses/CourseCards";
import Particle from "../Particle";
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
          ensuing success in boards exam and also emphasizing on real life
          projects and problem solving.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="Class 11 - All Boards"
              body="Python programming, data types, control structures, functions, arrays, strings, file handling, classes, objects, inheritance, exception handling, boolean algebra, basic algorithms, project-based learning."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="Class 12 - All Boards"
              body="Advanced Python, data structures, algorithms, database management, web development, networking, cybersecurity, AI, machine learning, advanced algorithms, software engineering principles, project-based learning."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="Computer Science Engineering - B. Tech"
              body="Programming languages, data structures, algorithms, computer architecture, software engineering, databases, networking,
              cybersecurity, artificial intelligence, machine learning, web development, operating systems, computer graphics, cloud computing, robotics, IoT, project-based learning."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="Information Tehnology - B. Tech"
              body="Programming fundamentals, data structures, algorithms, databases, networking, cybersecurity, web development, software engineering, AI, machine learning, cloud computing, IoT, project-based learning."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="Any non-IT Stream - IT Papers and Projects"
              body="Integration of IT tools for data analysis, project management software, digital communication, tech-enhanced presentations, and efficient documentation methods."
            />
          </Col>

          <Col md={4} className="course-card">
            <CourseCard
              isBlog={false}
              title="CSE/IT Major and Minor Project"
              body="Major project: Software development for a real-world problem. Minor project: Implementing a small-scale application or system using programming concepts."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Tuitions;
