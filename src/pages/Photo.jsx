import { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhoto } from "../redux/ducks/photos";

function Photo() {
  const { id } = useParams();

  const photo = useSelector((state) => state.photos.photo);

  const dispatch = useDispatch();

  const handleGetPhoto = () => {
    dispatch(getPhoto(id));
  };

  useEffect(handleGetPhoto, []);

  return (
    <div>
      {!("id" in photo) ? (
        <Spinner animation="border" />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photo.url} />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Photo;
