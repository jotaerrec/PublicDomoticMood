import React from "react";
import styles from "./styles.module.scss";

export const Coming = () => {
  return (
    <div className={styles.container} id="expo">
      <h1 className={styles.esperamos}>Los esperamos!</h1>
      <p className={styles.parrafo}>
        En la ExpoTecnica que se realizara el día jueves de 13hs a 21hs y el
        viernes que se realizara de 8hs a 18hs
        <a href="https://tecnica1merlo.edu.ar/expo-tecnica/">
          para más información aprete AQUÍ
        </a>
      </p>
    </div>
  );
};
