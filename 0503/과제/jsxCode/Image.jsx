import React, { useState } from 'react';
import './style.css';

export default function Image(props) {
  const images = [
    props.image,
    props.image1,
    props.image2,
    props.image3
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };
  
  const previousImage = () => {
    setImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      <img
        src={images[imageIndex]}
        alt={'안근효'}
        className="image-transition"
      />
      <button className='arrow' onClick={previousImage}>◀</button>
      {' '} {imageIndex+1} {' '}
      <button className='arrow' onClick={nextImage}>▶</button>
    </div>
  );
}