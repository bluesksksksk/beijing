import React, { useState } from "react";
import "./PhotoGallery.css";
import PhotoGalleryImage from "./PhotoGalleryImage";
import PhotoGalleryInfo from "./PhotoGalleryInfo";

function PhotoGallery({ category, data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div id="gallery" className="row">
      <h1 className="m-3">{category} Gallery</h1>
      <PhotoGalleryImage
        selectedIndex={selectedIndex}
        data={data}
        imageClick={(index) => handleImageClick(index)}
      />
      <PhotoGalleryInfo selectedItem={data[selectedIndex]} />
    </div>
  );
}

export default PhotoGallery;
