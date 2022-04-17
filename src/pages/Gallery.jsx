import { useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPhotos } from "../redux/ducks/photos";
import "../styles/gallery.css";

function Gallery() {
  const photos = useSelector((state) => state.photos.photos);

  const photosGrouped = photos.reduce(
    (photos, photo) => {
      let lastGroup = photos[photos.length - 1];

      if (lastGroup.length < 6) {
        lastGroup.push(photo);
      } else {
        lastGroup = [];
        lastGroup.push(photo);
        photos.push(lastGroup);
      }
      return photos;
    },
    [[]]
  );

  const dispatch = useDispatch();
  const handleGetPhotos = () => {
    dispatch(getPhotos());
  };

  useEffect(handleGetPhotos, []);

  const navigate = useNavigate();

  function showPhotoDetails(event) {
    const id = event.target.dataset.id;
    navigate(`/gallery/${id}`);
  }

  return (
    <div>
      {photos.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        photosGrouped.map((group, index) => (
          <div key={index}>
            <h3>Категория {index + 1}</h3>
            {group.map((photo) => (
              <Card
                key={photo.id}
                style={{
                  width: "10rem",
                  display: "inline-block",
                  position: "relative",
                }}
                className="gallery-card"
              >
                <Card.Img src={photo.thumbnailUrl} />
                <Card.Body
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    width: "100%",
                  }}
                  className="gallery-card-body"
                >
                  <Button
                    variant="primary"
                    style={{ margin: "auto" }}
                    data-id={photo.id}
                    onClick={showPhotoDetails}
                  >
                    Подробнее
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Gallery;
