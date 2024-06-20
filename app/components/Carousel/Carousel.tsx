
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import styles from './Carousel.module.css';
import Banner from '../Banner';

const Carousel = () => {
  const intervalRef = useRef(null);

  // Function to switch slides
  const switchSlides = (next = true) => {
    const activeSlide = document.querySelector('.carousel-item.active');
    if (!activeSlide) return; // If no active slide, return early

    const slides = document.querySelectorAll('.carousel-item');
    let nextSlide;

    if (next) {
      nextSlide = activeSlide.nextElementSibling || slides[0];
    } else {
      nextSlide = activeSlide.previousElementSibling || slides[slides.length - 1];
    }


    activeSlide.classList.remove('active');
    activeSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
    nextSlide.classList.add('active');
  };

  // Initialize the carousel
  const initializeCarousel = () => {
    intervalRef.current = setInterval(() => switchSlides(true), 5000); // Change slide every 5 seconds
  };

  // Start the carousel when the component mounts
  React.useLayoutEffect(() => {
    initializeCarousel();
    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, []);

  return (
    <div className='flex flex-auto'>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full h-64 hidden duration-700 ease-in-out active" data-carousel-item>
          <img src="/assets/banner6.jpg" className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => switchSlides(false)} className="btn btn-circle">❮</button>
          <button onClick={() => switchSlides(true)} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div className="carousel-item relative w-full h-64 hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/assets/banner7.jpg" className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => switchSlides(false)} className="btn btn-circle">❮</button>
          <button onClick={() => switchSlides(true)} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div className="carousel-item relative w-full h-64 hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/assets/banners1.jpg" className="w-full h-full object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => switchSlides(false)} className="btn btn-circle">❮</button>
          <button onClick={() => switchSlides(true)} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div className="carousel-item relative w-full h-64 hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/assets/banners2.jpg" className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => switchSlides(false)} className="btn btn-circle">❮</button>
          <button onClick={() => switchSlides(true)} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Carousel;

