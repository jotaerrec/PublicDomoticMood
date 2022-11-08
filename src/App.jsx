import React from "react";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import Particles from "react-tsparticles";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 18,
            },
            size: {
              value: 3,
            },
            color: "rgba(183,33,238,1)",
            line_linked: {
              shadow: {
                enable: true,
                color: "rgba(183,33,238,1)",
                blur: 1,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          style: {
            height: "100vh",
            width: "100vh",
            "z-index": "-1",
          },
        }}
        className={styles.particles}
      />
      <div className={styles.todo}>
        <Nav className={styles.Nav} />
        <Main className={styles.Main} />
      </div>
    </>
  );
}

export default App;
