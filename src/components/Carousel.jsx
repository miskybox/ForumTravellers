//Carousel.jsx 
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/App.css';

const CarouselBackground = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src="https://i.postimg.cc/J066Xhsz/glaciar-Perito-Moreno.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src="https://i.postimg.cc/WzTL8tpm/dragonstone.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src="https://i.postimg.cc/G3jBNpRX/angkor-Wat-amanecer.jpgn"
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src="https://i.postimg.cc/hj03Ssgx/torres-Del-Paine.jpg"
          alt="Slide 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBackground;