import React from "react";
import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <img src={process.env.PUBLIC_URL + "/img/LogoPng.png"} alt="logo" />
        </div>
        <div className={styles.lista}>
          <ul>
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#product"> Product </a>
            </li>
            <li>
              <a href="#ask"> Ask </a>
            </li>
            <li>
              <a href="#footer"> Footer</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
