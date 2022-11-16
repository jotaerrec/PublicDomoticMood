import styles from "./styles.module.scss";
import React from "react";

export const Presentations = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" id="about">
      <h1 className={styles.members}>Miembros del equipo</h1>
      <div className={styles.presentationPictures}>
        <div className={styles.card}>
          <img src={process.env.PUBLIC_URL + "img/javi.jpeg"} alt="javi" />
          <div className={styles.containerDescript}>
            <h1>
              Rodriguez <br />
              Javier
            </h1>
            <p>Lider y programador del equipo.</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={process.env.PUBLIC_URL + "img/fede.jpeg"} alt="fede" />
          <div className={styles.containerDescript}>
            <h1>
              Moreira
              <br /> Federico
            </h1>
            <p>Encargado de la documentación y pruebas.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={process.env.PUBLIC_URL + "img/pablo.jpeg"} alt="pablo" />
          <div className={styles.containerDescript}>
            <h1>
              Maciel
              <br /> Pablo
            </h1>
            <p>Encargado de montaje y diseño electrónico.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={process.env.PUBLIC_URL + "img/kalder.jpeg"} alt="kalder" />
          <div className={styles.containerDescript}>
            <h1>
              Calderón
              <br />
              Ignacio
            </h1>
            <p>Modelador 3D y logistica.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
