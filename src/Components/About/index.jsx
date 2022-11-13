import React from "react";
import styles from "./styles.module.scss";
import digital from "./Digital.svg";
import innovation from "./Innovation.svg";
import Time from "./Smart.svg";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={Time} alt="" />
        <div className={styles.containerText}>
          <h2>Confort.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nulla consequatur recusandae id provident similique architecto dolor
            repellat fugit libero ipsa magni praesentium placeat,
            exercitationem, ad culpa saepe. Laudantium, quod?
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={innovation} alt="" />
        <div className={styles.containerText}>
          <h2>Innovar.</h2>
          <p>
            Este proyecto se basa en la Internet de las Cosas (IoT, Internet of
            Things) representa un nuevo ambiente de cosas u objetos unívocamente
            identificables. Esto quiere decir que no buscamos solo conectar no
            sólo computadoras y teléfonos inteligentes sino también otros
            dispositivos de uso cotidiano.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={digital} alt="" />
        <div className={styles.containerText}>
          <h2>Innovar.</h2>
          <p>
            Este proyecto se basa en la Internet de las Cosas (IoT, Internet of
            Things) representa un nuevo ambiente de cosas u objetos unívocamente
            identificables. Esto quiere decir que no buscamos solo conectar no
            sólo computadoras y teléfonos inteligentes sino también otros
            dispositivos de uso cotidiano.
          </p>
        </div>
      </div>
    </div>
  );
};
