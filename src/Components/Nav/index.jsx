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
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#product">Productos</a>
              </li>
              <li>
                <a href="#ask">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
