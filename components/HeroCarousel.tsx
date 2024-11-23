'use client'

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    {url: '/assets/images/hero-1.svg', alt:'smartwatch'},
    {url: '/assets/images/hero-2.svg', alt:'bag'},
    {url: '/assets/images/hero-3.svg', alt:'lamp'},
    {url: '/assets/images/hero-4.svg', alt:'airfryer'},
    {url: '/assets/images/hero-5.svg', alt:'chair'}
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs = {false}
        showArrows = {false}
        interval={2000}
        infiniteLoop
        autoPlay
        showStatus = {false}
      >
        {heroImages.map((image) => (
            <Image 
                src={image.url}
                key={image.alt}
                alt={image.alt}
                height={10}
                width={10}

            />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
