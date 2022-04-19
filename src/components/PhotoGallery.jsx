import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/photo.css";
import Photo from "./Photo";

function PhotoGallery({ id, url, cardClass }) {
  const navigate = useNavigate();
  function showPhotoDetails() {
    navigate(`/gallery/${id}`);
  }

  return (
    <Photo
      url={url}
      body={
        <Button
          variant="primary"
          style={{ margin: "auto" }}
          onClick={showPhotoDetails}
        >
          Подробнее
        </Button>
      }
      cardClass={cardClass}
    />
  );
}

export default PhotoGallery;
