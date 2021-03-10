import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./components/box";
import Plane from "./components/plane";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "./index.css";

function App() {
  return (
    <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box/>
        <Plane/>
      </Physics>
    </Canvas>
  );
}

export default App;
