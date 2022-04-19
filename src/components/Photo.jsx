import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/photo.css";

function Photo({ id, url, cardClass, body }) {
  const navigate = useNavigate();
  function showPhotoDetails() {
    navigate(`/gallery/${id}`);
  }

  return (
    <Card className={cardClass}>
      <Card.Img src={url} />
      <Card.Body>
        {/* {showDetailsButton && (
          <Button
            variant="primary"
            style={{ margin: "auto" }}
            onClick={showPhotoDetails}
          >
            Подробнее
          </Button>
        )}
        {title && <Card.Title>{title}</Card.Title>} */}
        {body}
      </Card.Body>
    </Card>
  );
}

export default Photo;
