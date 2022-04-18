import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Photo({ photo }) {
  const navigate = useNavigate();

  function showPhotoDetails() {
    navigate(`/gallery/${photo.id}`);
  }

  return (
    <Card
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
          onClick={showPhotoDetails}
        >
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Photo;
