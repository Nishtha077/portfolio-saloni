import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saloni Mishra  </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently a student at <span className="purple">Lovely Professional University</span>.
            <br />
            A tech enthusiast and future-driven Computer Science engineer passionate about building impactful AI/ML solutions — from facial recognition to deep learning for NLP.            
            <br />
              B.Tech CSE student, building projects in neural networks, anomaly detection, and image processing. Passionate about real-world problem solving and tech innovation.
            <br />
            Let’s connect and build something impactful with data!

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
