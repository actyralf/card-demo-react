import "./Card.css";
import { useState } from "react";

export function Card(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }
  return (
    <div className="card">
      <img
        onClick={handleFavoriteClick}
        className="favorite-icon"
        src={isFavorite ? "heart-filled.png" : "heart-outlined.png"}
      />
      <img src={props.image} width="70%" />
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  );
}
