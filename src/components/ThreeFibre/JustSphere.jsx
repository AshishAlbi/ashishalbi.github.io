import React from "react";
import ThreeCanvas from "./ThreeCanvas";
import { OrbitControls, useTexture } from "@react-three/drei";

function EarthModel() {
  return (
    <ThreeCanvas cameraPosition={[0, 10, 45]} isPcComponent={true}>
      <Model/>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate />
    </ThreeCanvas>
  );
}

function Model() {
  const earthTextures = useTexture({map:'/models/earthmap1k.jpg',roughnessMap:'/models/earthspec1k1.jpg'});
  return (
    <mesh scale={2}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial {...earthTextures}/>
    </mesh>
  );
}

export default EarthModel;
