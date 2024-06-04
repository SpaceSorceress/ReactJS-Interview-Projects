import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../Header";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function assignRating(currentIndex) {
    setRating(currentIndex);
  }
  function handleHover(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  const stars = [];
  for (let i = 1; i <= numberOfStars; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i <= hover ? "active" : "inactive"}
        onClick={() => assignRating(i)}
        onMouseEnter={() => handleHover(i)}
        onMouseLeave={handleMouseLeave}
        size={40}
      ></FaStar>
    );
  }

  return (
    <div className="star-wrapper">
      <Header title={"Star rating"} />
      <div className="star-content">{stars}</div>

      <h2>You gave it:</h2>
      {rating === 0 && <span> </span>}
      {rating === 1 && <span> a star.</span>}
      {rating > 1 && <span> {rating} stars.</span>}
    </div>
  );
}

StarRating.propTypes = {
  numberOfStars: PropTypes.number,
};
