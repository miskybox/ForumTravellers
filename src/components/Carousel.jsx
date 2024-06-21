//Carousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/App.css';
import glaciarBgFog from '../assets/glaciar-bg-fog.jpg';
import sjgBg from '../assets/SJG-bg.jpg';
import desierto from '../assets/desierto.jpg';
import torres from '../assets/torres.jpg';

const CarouselBackground = () => {
 return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src={glaciarBgFog}
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src={torres}
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src={desierto}
          alt="Slide 3"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img loading="lazy"
          className="d-block w-100"
          src={sjgBg}
          alt="Slide 4"
        />
      </Carousel.Item>
    </Carousel>
 );
}

export default CarouselBackground;
