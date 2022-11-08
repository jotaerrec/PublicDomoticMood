import React from "react";
import { Scene, ObjectLoader } from "three";
import styles from "./styles.module.scss";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree } from "react-three-fiber";
import { Suspense, useEffect } from "react";

const CameraController = () => {
  const { camera, gl } = useThree();
  camera.fov = 90;
  camera.near = 0.1;
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    console.log(controls);
    console.log(camera);
    controls.minDistance = 25;
    controls.maxDistance = 30;
    controls.enablePan = false;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
export const Main = () => {
  const scene = new Scene();
  const loader = new ObjectLoader();
  loader.load(
    `${process.env.PUBLIC_URL}/scene.json`,
    function (obj) {
      // Add the loaded object to the scene
      console.log("complete");
      scene.add(obj);
    },

    // onProgress callback
    function (xhr) {
      console.log(xhr.loaded);
      console.log(xhr.total);
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },

    // onError callback
    function (err) {
      console.error("An error happened");
    }
  );
  return (
    <div className={styles.principalScreen}>
      <div className={styles.model}>
        <Suspense fallback="loading...">
          <Canvas
            camera={{
              position: [
                -13.973569089018332, 15.65734658519813, -15.348839201236556,
              ],
              fov: 90,
              zoom: 1.5,
              near: 0.1,
            }}
            style={{ height: "100%", width: "100%" }}
            onCreated={({ gl }) => {
              gl.gammaInput = true;
            }}
          >
            <CameraController />
            <primitive object={scene} />
          </Canvas>
        </Suspense>
      </div>
      <div className={styles.containerText}>
        <p className={styles.tittle}>
          Somos <b>DomoticMood.</b>
        </p>
        <h1 className={styles.stroke}>DomoticMood.</h1>
        <p className={styles.descript}>
          Somos un servicio de domótica, buscamos el control y la seguridad de
          tu hogar de manera totalmente remota. Nos adaptamos a tu comodidad.
        </p>
      </div>
    </div>
  );
};
