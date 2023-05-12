import React from "react";
import styles from "./styles.module.css";
import brandLogo from "../../images/Warm.svg";
import brandName from "../../images/HAPPY GALERİ.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className={`container-fluid ${styles.navbarContainer}`}>
          <a className="navbar-brand" href="/">
            <img src={brandLogo} alt="brandLogo" className={styles.brandLogo} />
            <img src={brandName} alt="brandLogo" className={styles.brandName} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${styles.menu}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#!">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  sıkça sorulan sorular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  galeri
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  iletişim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  giriş yap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  alışveriş (0)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
