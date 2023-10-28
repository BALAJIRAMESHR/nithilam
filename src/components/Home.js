import React from 'react';
import './ImageGrid.css';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';

const images = [
    { src: img1, text: 'AI' },
    { src: img2, text: 'Tamil' },
    { src: img3, text: 'Tamil' },
    { src: img3, text: 'Tamil' },
    { src: img3, text: 'Tamil' },
    { src: img3, text: 'Tamil' },
];

function ImageGrid() {
    return (
        <div>
            <h1 className='event-name'>நிகழ்வுகள்</h1>
            <div className="image-grid">
            
            {images.map((item, index) => (
                <div key={index} className="image-container">
                    <img src={item.src} alt={`Image ${index}`}/>
                    <div className="overlay-text">{item.text}</div>
                </div>
            ))}
        </div>
        </div>
        
    );
}

export default ImageGrid;
