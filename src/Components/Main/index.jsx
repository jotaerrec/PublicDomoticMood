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
    controls.minDistance = 25;
    controls.maxDistance = 35;
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
              position: [-24.911, 20.184, -17.733],
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptas sequi, sint consectetur cupiditate adipisci dicta possimus
          corporis voluptate nobis alias error temporibus iste eveniet,
          nesciunt, veniam itaque facere aliquid.
        </p>
      </div>
    </div>
  );
};
