import { useEffect } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getPhoto } from "../redux/ducks/photos";
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
  console.log(photosGrouped);

  const dispatch = useDispatch();
  const handleGetPhotos = () => {
    dispatch(getPhotos());
  };
  const handleGetPhoto = () => {
    dispatch(getPhoto());
  };

  useEffect(handleGetPhotos, []);
  // useEffect(handleGetPhoto, []);

  return (
    <div>
      {photosGrouped.map((group, index) => (
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
              className="card"
            >
              <Card.Img src={photo.thumbnailUrl} />
              <Card.Body
                style={{
                  position: "absolute",
                  bottom: "0px",
                  width: "100%",
                }}
                className="card-body"
              >
                <Button variant="primary" style={{ margin: "auto" }}>
                  Подробнее
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
