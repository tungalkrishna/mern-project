import React from "react";
import "./Gallary.css";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1519816787625-20941b9a3b52",
    "https://images.unsplash.com/photo-1500336624523-d727130c3328",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef"
  ];

  return (
    <div className="gallery-container">
      <h2>Travel Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="travel" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
