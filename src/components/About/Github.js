import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="course-heading" style={{ paddingBottom: "20px" }}>
        Days We Have <strong className="purple">Coded</strong>
      </h1>
      <GitHubCalendar
        username="tech-key-academy"
        blockSize={13}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
