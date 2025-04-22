import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sp1 from "../../Assets/Projects/s_p1.png";
import sp2 from "../../Assets/Projects/s_p2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sp1}
              isBlog={false}
              title="Face Liveness Detection (Sept 2024 – Dec 2024)"
              description="Designed and implemented a Face Liveness Detection system to prevent identity fraud during Aadhaar authentication Detects and blocks the use of fake representations such as printed photos or videos. Enabled secure remote identity verification using real-time face validation.
              "/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sp2}
              isBlog={false}
              title="Text Summarization System (April 2024 – Aug 2024)"
              description="Built an advanced text summarizer using Neural Machine Translation (NMT) techniques including RNNs, LSTMs, and Attention Mechanism. Created a robust encoder-decoder model for fluent and coherent summaries. Enhanced preprocessing with tokenization, embedding, padding, and one-hot encoding."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
