import React from "react";
import "../App.css";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { title, description, posterURL, rating, id },
}) => {
  return (
    <div className="Card">
      <div className="card-left">
        <img src={posterURL} />
      </div>
      <div className="card-right">
        <div className="card-rating">
          <Rate rating={rating} />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="btn">
          <Link to={`/trailler/${id}`}>show trailler</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
