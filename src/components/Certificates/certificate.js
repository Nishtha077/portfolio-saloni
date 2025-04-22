import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import cert1 from "../../Assets/certificate1.jpg";
import cert2 from "../../Assets/certificate2.jpg";
import cert3 from "../../Assets/certificate3.jpg";

const certificates = [
  {
    file: cert1,
    name: "Cyber Shiksha Online Training Program",
    issuer: " Quick Heal Academy",
    type: "image",
    description:
      "Learned cyber security principles and practices including threat detection and digital safety.",
  },
  {
    file: cert2,
    name: "Build Responsive Real-World Websites with HTML and CSS ",
    issuer: "Udemy (Instructor: Jonas Schmedtmann)",
    type: "image",
    description:
      "Completed a 37.5-hour course focused on building professional, fully responsive websites using modern HTML and CSS techniques.",
  },
  {
    file: cert3,
    name: "Complete Interview Preparation - C++",
    issuer: "GeeksforGeeks",
    type: "image",
    description:
      "Strengthened core concepts in Data Structures, Algorithms, and C++ for interview readiness.",
  },
];

function Certificate() {
  const [width, setWidth] = useState(1200);
  const [pages, setPages] = useState({});

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = (numPages, name) => {
    setPages((prev) => ({ ...prev, [name]: numPages }));
  };

  return (
    <Container fluid className="resume-section py-4 px-3">
      <Particle />
      <h2 className="text-center text-white mb-4">📜 Certificates</h2>

      {certificates.map((cert, index) => {
        const isEven = index % 2 === 0;

        const Description = (
          <Col
            md={6}
            className="d-flex align-items-center mb-3"
            style={{ minHeight: "250px" }}
          >
            <div style={{ color: "white" }}>
              <h4 className="mb-1 text-white">{cert.name}</h4>
              <h6 className="text-muted mb-2">{cert.issuer}</h6>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.95rem",
                  color: "white",
                }}
              >
                {cert.description}
              </p>
            </div>
          </Col>
        );

        const Preview = (
          <Col md={6} className="mb-3 d-flex align-items-center justify-content-center">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
              className="shadow-sm"
            >
              {cert.type === "pdf" ? (
                <Document
                  file={cert.file}
                  onLoadSuccess={({ numPages }) =>
                    onDocumentLoadSuccess(numPages, cert.name)
                  }
                >
                  <Page
                    pageNumber={1}
                    width={width > 786 ? 330 : 250}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </Document>
              ) : (
                <img
                  src={cert.file}
                  alt={cert.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          </Col>
        );

        return (
          <Card
            key={index}
            className="mb-4 py-3 px-3"
            style={{
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "15px",
            }}
          >
            <Row className="align-items-center">
              {isEven ? (
                <>
                  {Description}
                  {Preview}
                </>
              ) : (
                <>
                  {Preview}
                  {Description}
                </>
              )}
            </Row>
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="primary"
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                size="sm"
                style={{ fontSize: "0.9rem" }}
              >
                <AiOutlineDownload /> &nbsp;Download Certificate
              </Button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default Certificate;
