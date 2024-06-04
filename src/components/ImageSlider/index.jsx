import PropTypes from "prop-types";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { useFetchHook } from "../../hooks/useFetch";
import Header from "../Header";
import LoadingSpinner from "../LoadingSpinner";

export default function ImageSlider({ limit = 5, page = 1 }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const urlBase = "https://picsum.photos/v2/list";

  let link = `${urlBase}?page=${page}&limit=${limit}`;
  const [images, error, loading] = useFetchHook(link);

  function handleLeftClick() {
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? images.length - 1 : currentSlideIndex - 1
    );
  }

  function handleRightClick() {
    setCurrentSlideIndex(
      currentSlideIndex === images.length - 1 ? 0 : currentSlideIndex + 1
    );
  }

  function handleCircleClick(index) {
    setCurrentSlideIndex(index);
  }

  return (
    <div className="slider-container">
      <Header title={"Image Slider"} />
      <div className="slider-content">
        {loading && <LoadingSpinner />}
        {error && <div className="slider-error">Error occured {error}</div>}
        <BsArrowLeftCircleFill
          className="slider-arrow arrow-left"
          onClick={handleLeftClick}
        />
        {images.length > 0 &&
          images.map((item, index) => (
            <img
              key={item.id}
              className={
                currentSlideIndex === index
                  ? "slider-current-image"
                  : "slider-current-image hide-current-image"
              }
              alt={item.url}
              src={item.download_url}
            ></img>
          ))}
        <BsArrowRightCircleFill
          className="slider-arrow arrow-right"
          onClick={handleRightClick}
        />
        <span className="slider-circles">
          {images.length > 0 &&
            images.map((item, index) => (
              <button
                key={item.id}
                className={
                  currentSlideIndex === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => handleCircleClick(index)}
              ></button>
            ))}
        </span>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
};
