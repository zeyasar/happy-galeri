import React from "react";
import styles from "./styles.module.css";

const Middle = () => {
  return (
    <div className={styles.middleContainer}>
      <div className={styles.headerContainer}>
        <p className={styles.header}>Yeni gelen sanat eserlerini İnceleyin</p>
      </div>
      <div className={styles.container}>
        <p className={styles.bottomText}>Özel Galerimiz</p>
        <div
          id="myCarousel"
          className={` ${styles.carousel} carousel slide`}
        >
          <div className={` ${styles.indicators} .carousel-indicators-round`}>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              className="active"
              aria-current="true"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              className="active"
              aria-current="true"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="5"
              className="active"
              aria-current="true"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="6"
              className="active"
              aria-current="true"
              aria-label="Slide 7"
            ></button>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className={`${styles.prev} carousel-control-prev-icon`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middle;
