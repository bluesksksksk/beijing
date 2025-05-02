import React from "react";
import "./Attraction.css";

function Attraction({ title, image, onClick }) {
  const setCategory = (id) => {
    onClick(id);
  };

  return (
    <div
      id="category-guide"
      className="col-3"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `400px`,
      }}
      onClick={setCategory}
    >
      <h3> {title} </h3>
    </div>
  );
}

export default Attraction;
