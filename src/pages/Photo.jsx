import { useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPhoto } from "../redux/ducks/photos";

function Photo() {
  const { id } = useParams();

  const photo = useSelector((state) => state.photos.photo);

  const dispatch = useDispatch();

  const handleGetPhoto = () => {
    dispatch(getPhoto(id));
  };

  useEffect(handleGetPhoto, []);

  const navigate = useNavigate();

  function goBackToGallery(event) {
    navigate("/gallery");
  }

  return (
    <div>
      {!("id" in photo) ? (
        <Spinner animation="border" />
      ) : (
        <div>
          <Button onClick={goBackToGallery}>Назад</Button>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={photo.url} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Photo;
