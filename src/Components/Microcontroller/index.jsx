import React from "react";
import styles from "./styles.module.scss";

export const MicroController = () => {
  return (
    <div className={styles.principalScreen}>
      <div className={styles.model}>
        <img src={process.env.PUBLIC_URL + "img/atmega.png"} alt="" />
      </div>
      <div className={styles.containerText}>
        <h2>
          <b>ATmega2560 el corazón de nuestro proyecto</b>
        </h2>
      </div>
    </div>
  );
};
