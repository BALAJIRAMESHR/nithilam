import React from 'react';
import { Link } from 'react-router-dom';


const images = [
//   'url1.jpg',
//   'url2.jpg',
//   'url3.jpg',
  // ... add more image URLs
];

function Gallery() {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <Link key={index} to={`/details/${index}`}>
          <img src={image} alt={`Gallery item ${index}`} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;