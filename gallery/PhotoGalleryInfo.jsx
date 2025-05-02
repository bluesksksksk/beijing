import "./PhotoGalleryInfo.css";

function PhotoGalleryInfo({ selectedItem }) {
  return (
    <div className="col-lg-7 col-md-5 col-xs-2">
      <h2>{selectedItem.title} </h2>
      <h2 className="Chinese-title">{selectedItem.title_Chinese}</h2>
      <p>{selectedItem.description}</p>
    </div>
  );
}

export default PhotoGalleryInfo;
