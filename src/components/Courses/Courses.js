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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Courses </strong>
        </h1>
        <p style={{ color: "white" }}>
          are perfectly tailored to meet industry needs
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CourseCard
              imgPath={chatify}
              isBlog={false}
              title="Full Stack Software Engineering"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Backend Developer"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={editor}
              isBlog={false}
              title="Web Frontend Developer"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={leaf}
              isBlog={false}
              title="Software Testing"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={suicide}
              isBlog={false}
              title="Android App Development"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col>

          <Col md={4} className="project-card">
            <CourseCard
              imgPath={emotion}
              isBlog={false}
              title="IOS App Development"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person." 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;
