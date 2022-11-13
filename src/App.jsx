import React from "react";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import Particles from "react-tsparticles";
import styles from "./styles.module.scss";
import { About } from "./Components/About";

function App() {
  return (
    <>
      <div className={styles.todo}>
        <Nav className={styles.Nav} />
        <Main className={styles.Main} />
        <About />
      </div>
    </>
  );
}

export default App;
