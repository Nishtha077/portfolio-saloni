import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { SiC, SiScikitlearn, SiTensorflow, SiPytorch, SiKeras, SiSpacy, SiNumpy, SiPandas } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiSpacy />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      

    
    </Row>
  );
}

export default Techstack;
