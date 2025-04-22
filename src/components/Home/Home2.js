import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import { MdEmail, MdPhone } from "react-icons/md";

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am Saloni Mishra, a passionate Computer Science and Engineering undergraduate at Lovely Professional University.
              <br />
              <br /> I have a deep interest in 
              <i>
                <b className="purple"> Machine Learning, AI-based systems, and solving real-world problems </b>
              </i>
              using data-driven techniques.
              <br />
              <br />
              With a solid foundation in  &nbsp;
              <i>
                <b className="purple">C++, Python, and Data Structures,  </b> I continuously strive to upskill through{" "}
                <b className="purple">
                hands-on projects, hackathons, and coding challenges.
                </b>
              </i>
              <br />
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
                  href="https://github.com/saloni-mishra05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saloni-mishra-316552251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:salonimishra497@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <MdEmail />
  </a>
</li>

<li className="social-icons">
  <a
    href="tel:+917643015704"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <MdPhone />
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
