import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPhoto } from "../redux/ducks/photos";
import PhotoDetailsComponent from "../components/PhotoDetails";

function PhotoDetails() {
  const { id } = useParams();

  const photo = useSelector((state) => state.photos.photo);

  const dispatch = useDispatch();
  const handleGetPhoto = () => {
    dispatch(getPhoto(id));
  };

  useEffect(handleGetPhoto, []);

  const navigate = useNavigate();
  function goBackToGallery() {
    navigate("/gallery");
  }

  return (
    <div>
      <Button onClick={goBackToGallery}>Назад</Button>
      {!("id" in photo) || photo.id != id ? (
        <Spinner animation="border" />
      ) : (
        <div>
          <PhotoDetailsComponent
            url={photo.url}
            title={photo.title}
            cardClass="details-card"
          />
        </div>
      )}
    </div>
  );
}

export default PhotoDetails;
