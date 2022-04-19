import { Card } from "react-bootstrap";
import "../styles/photo.css";
import Photo from "./Photo";

function PhotoDetails({ url, title, cardClass }) {
  return (
    <Photo
      url={url}
      body={<Card.Title>{title}</Card.Title>}
      cardClass={cardClass}
    />
  );
}

export default PhotoDetails;
