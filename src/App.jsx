import React from "react";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import Particles from "react-tsparticles";
import styles from "./styles.module.scss";
import { About } from "./Components/About";
import { Presentations } from "./Components/Presentations";
import { MicroController } from "./Components/Microcontroller";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className={styles.todo}>
        <Nav className={styles.Nav} />
        <Main className={styles.Main} />
        <About />
        <Presentations />
        <MicroController />
        <Footer />
      </div>
    </>
  );
}

export default App;
