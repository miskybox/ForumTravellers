//Gallery.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Gallery = () => {
  const images = [
    {
      src: "https://i.postimg.cc/SQwNfgB9/angkor-wat.jpg",
      title: "Angkor Wat",
      link: "/blog/angkor-wat",
    },
    {
      src: "https://i.postimg.cc/CLbzfCnN/zaanse-schans.jpg",
      title: "Zaanse Schans",
      link: "/blog/zaanse-schans",
    },
    {
      src: "https://i.postimg.cc/G38Bbnc6/sardenya.jpg",
      title: "Sardinia",
      link: "/blog/sardenya",
    },
    {
      src: "https://i.postimg.cc/VvM0mvrs/petra.jpg",
      title: "Petra",
      link: "/blog/petra",
    },
    {
      src: "https://i.postimg.cc/m2syhWbp/dead-sea.jpg",
      title: "Dead Sea",
      link: "/blog/dead-sea",
    },
    {
      src: "https://i.postimg.cc/YCGrV9Vh/iceland.jpg",
      title: "Iceland",
      link: "/blog/iceland",
    },
    // Add more image objects as needed
  ];

  return (
    <Container className="mb-3 gallery-container">
      <h1 className="h1 text-center mb-4">Blog Gallery</h1>
      <Row xs={1} md={3} className="g-4">
        {images.map((image, index) => (
          <Col key={index} className="mb-4">
            <Card className="gallery-card">
              <Link to={image.link}>
                <Card.Img variant="top" src={image.src} alt={image.title} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link to={image.link} className="card-link">
                    {image.title}
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
