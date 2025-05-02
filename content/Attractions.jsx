import React, { useState } from "react";
import Attraction from "./Attraction";
import PhotoGallery from "../gallery/PhotoGallery";
import { ATTRACTION_CATEGORIES, GALLERY_DATA } from "../../data/AttractionData";

function Attractions() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);
  const indexHandler = (index) => {
    if (selectedCategoryIndex === index) {
      setSelectedCategoryIndex(-1); // 双击 收起
    } else {
      setSelectedCategoryIndex(index);
      window.scrollBy(0, 500);
    }
  };

  return (
    <div className="row">
      {ATTRACTION_CATEGORIES.map((category, index) => (
        <Attraction
          key={index}
          title={category.title}
          image={category.image}
          onClick={() => indexHandler(index)}
        />
      ))}
      {selectedCategoryIndex !== -1 && (
        <PhotoGallery
          key={selectedCategoryIndex}
          id={selectedCategoryIndex}
          category={ATTRACTION_CATEGORIES[selectedCategoryIndex].title}
          index={selectedCategoryIndex}
          data={GALLERY_DATA[selectedCategoryIndex]}
        />
      )}
    </div>
  );
}

export default Attractions;
