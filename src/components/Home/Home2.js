import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE <span className="purple"> Tech-key Academy </span>
            </h1>
            <p className="home-about-body">
              Welcome to our unique learning platform aiming to solve
              <i>
                <b className="purple">  industry's need for skilled engineer after graduation</b>.
              </i>
              <br />
              <br />
              We offer cutting-edge training in the latest skills essential for solving real-world problems.
              <br />
              Our projects are led by seasoned
              <i>
                <b className="purple"> industry professionals </b> with a minimum 5 years of experience &nbsp;
              </i>
              ensuring practical insights and mentorship.
              <br />
              <br />
              <br />
              Here, you have the opportunity to build a robust CV with a portfolio
              of <b className="purple">
                live projects
              </b>,
              setting you on the path to realizing
              your <b className="purple">
                dream of becoming a Software Engineer
              </b> in top US Product Software companies.
              <br />
              Join us and take the first step towards a successful and fulfilling career. &nbsp;
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tech-key-academy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhijit-das-18aug/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
