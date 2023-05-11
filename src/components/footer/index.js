import React from "react";
import styles from "./styles.module.css";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiYoutubeFill, RiPinterestFill, RiLinkedinBoxFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer1}>
        <div className={styles.leftContainer}>
          <div className={styles.links}>
            <p className={styles.linkHeader}>hakkımızda</p>
            <ul>
              <li>
                <a href="#!">Galeri hakkında </a>
              </li>
              <li>
                <a href="#!">Ziyaret Kuralları </a>
              </li>
              <li>
                {" "}
                <a href="#!">Bizi desteklemek isteyenler için </a>{" "}
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <p className={styles.linkHeader}>websitemiz</p>
            <ul>
              <li>
                {" "}
                <a href="#!">Online bilet al </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#!">Mağaza </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#!">koleksiyonlar </a>{" "}
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <p className={styles.linkHeader}>Contact</p>
            <ul>
              <li>
                {" "}
                <a href="#!">Sıkça sorulan sorular </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#!">iletişime geç </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#!">bize fikir verin </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#!">Kariyer </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
        <p className={styles.footer2Text}>Bizi takip et</p>
        <div className={styles.socialLink}>
          <a href="#!"> <RiFacebookFill className={styles.icons}/> </a>
          <a href="#!"> <RiInstagramLine className={styles.icons}/> </a>
          <a href="#!"> <RiTwitterFill className={styles.icons}/> </a>
          <a href="#!"> <RiYoutubeFill className={styles.icons}/> </a>
          <a href="#!"> <RiPinterestFill className={styles.icons}/> </a>
          <a href="#!"> <RiLinkedinBoxFill className={styles.icons}/> </a>
        </div>
        </div>
      </div>
      <div className={`mx-auto ${styles.line}`}></div>
      <div className={styles.footer2}>
        <a href="#!">Legal Notice</a>
        <a href="#!">Privacy policy</a>
        <a href="#!">Cookies</a>
      </div>
    </div>
  );
};

export default Footer;
