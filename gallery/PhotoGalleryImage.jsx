import "./PhotoGalleryImage.css";

function PhotoGalleryImage({ selectedIndex, data, imageClick }) {
  return (
    <div className="gallery-container col-lg-4 col-md-6 col-xs-7">
      <div className="big-image">
        <img src={data[selectedIndex].image} alt="Selected" />
      </div>
      <div className="small-images">
        {data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Image ${index}`}
            onClick={() => imageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGalleryImage;
