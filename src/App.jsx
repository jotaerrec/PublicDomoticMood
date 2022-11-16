import React, { useEffect } from "react";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import styles from "./styles.module.scss";
import { About } from "./Components/About";
import { Presentations } from "./Components/Presentations";
import { MicroController } from "./Components/Microcontroller";
import AOS from "aos";
import "aos/dist/aos.css";
import { Coming } from "./Components/Coming";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.todo}>
        <Nav className={styles.Nav} />
        <Main className={styles.Main} />
        <Presentations />
        <MicroController />
        <About />
        <Coming />
      </div>
    </>
  );
}

export default App;
