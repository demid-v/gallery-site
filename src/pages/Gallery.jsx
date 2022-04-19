import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoGallery from "../components/PhotoGallery";
import { getPhotos } from "../redux/ducks/photos";

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

  return (
    <div>
      {photos.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        photosGrouped.map((group, index) => (
          <div key={index}>
            <h3>Категория {index + 1}</h3>
            {group.map((photo) => (
              <PhotoGallery
                key={photo.id}
                id={photo.id}
                url={photo.thumbnailUrl}
                showDetailsButton
                cardClass="gallery-card"
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Gallery;
