import React from "react";
import styles from "./styles.module.css";

const Podcast = ({ galery }) => {
  console.log(galery);
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.text}>
          <p className={styles.header}>Podcast</p>
          <p className={styles.subHeader}>
            bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
            yüzden en iyi şekilde .
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <p className={styles.link}>SPOTİFAY</p>
        </div>
        <div className={styles.galleryContainer}>
          <div class={styles.item1}>
            <img
              src={galery[6]?.imagelist[0].url}
              alt="Leonardo da Vinci"
              className="img-fluid"
            />
          </div>
          <div class={styles.item2}>
            <img
              src={galery[7]?.imagelist[0].url}
              alt="Michelangelo"
              className="img-fluid"
            />
          </div>
          <div class={styles.item3}>
            <img
              src={galery[9]?.imagelist[0].url}
              alt="Raphael"
              className="img-fluid"
            />
          </div>
          <div class={styles.item4}>
            <img
              src={galery[3]?.imagelist[0].url}
              alt="Paul Cézanne"
              className="img-fluid"
            />
          </div>
          <div class={styles.item5}>
            <img
              src={galery[6]?.imagelist[0].url}
              alt="Leonardo da Vinci"
              className="img-fluid"
            />
          </div>
          <div class={styles.item6}>
            <img
              src={galery[8]?.imagelist[0].url}
              alt="Leonardo da Vinci"
              className="img-fluid"
            />
          </div>
          <div class={styles.item7}>
            <img
              src={galery[8]?.imagelist[0].url}
              alt="Leonardo da Vinci"
              className="img-fluid"
            />
          </div>

          <div class={styles.item8}>
            <img
              src={galery[4]?.imagelist[0].url}
              alt="Paul Cézanne"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div class={`card text-bg-dark ${styles.card}`}>
          <img src={galery[1]?.imagelist[0].url} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class={`card-title ${styles.cardTitle}`}>EUROPEAN</h5>
            <p class={`card-text mx-auto ${styles.cardText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            
          </div>
        </div>
        <div class={`card text-bg-dark ${styles.card}`}>
          <img src={galery[0]?.imagelist[0].url} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class={`card-title ${styles.cardTitle}`}>EUROPEAN</h5>
            <p class={`card-text mx-auto  ${styles.cardText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            
          </div>
        </div>
        <div class={`card text-bg-dark ${styles.card}`}>
          <img src={galery[2]?.imagelist[0].url} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class={`card-title ${styles.cardTitle}`}>EUROPEAN</h5>
            <p class={`card-text mx-auto  ${styles.cardText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            
          </div>
        </div>
        <div class={`card text-bg-dark ${styles.card}`}>
          <img src={galery[0]?.imagelist[0].url} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class={`card-title ${styles.cardTitle}`}>EUROPEAN</h5>
            <p class={`card-text mx-auto  ${styles.cardText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
