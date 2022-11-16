import React from "react";
import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <>
      <nav>
        <div className={styles.contain}>
          <div className={styles.logo}>
            <img src={process.env.PUBLIC_URL + "/img/DLogo.png"} alt="logo" />
          </div>
          <div className={styles.lista}>
            <ul>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#features">Caracteristicas</a>
              </li>
              <li>
                <a href="#expo">Expotecnica</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
