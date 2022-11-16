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
            Este producto brindara mayor comodidad y bien estar en el dia a dia
            cotidiano permitiendole al usuario estar al tanto de lo que ocurre
            en su casa de forma mas organizada y eficiente
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={innovation} alt="" />
        <div className={styles.containerText}>
          <h2>Accesibilidad.</h2>
          <p>
            El desarrollo del producto al seguir una filosofia modular le
            posibilita al usuario una mayor gestion de la seguridad y el
            monitoreo de su hogar y podrá decidir cuantos actuadores adquirira
            segun sus necesidades en el momento.
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
