import React from "react";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import Particles from "react-tsparticles";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <div className={styles.todo}>
        <Nav className={styles.Nav} />
        <Main className={styles.Main} />
      </div>
    </>
  );
}

export default App;
