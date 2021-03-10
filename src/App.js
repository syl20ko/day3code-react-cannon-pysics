import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./components/box";
import Plane from "./components/plane";
import { OrbitControls, Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "./index.css";

function App() {
  return (
    <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
      <OrbitControls />
      <Sky sunPosition={[0, 10, 0]} inclination={0.7} azimuth={0.25} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, 5, -20]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={1.5} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
