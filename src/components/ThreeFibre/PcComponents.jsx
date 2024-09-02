import { Float, useGLTF } from "@react-three/drei";
import React from "react";
import ThreeCanvas from "./ThreeCanvas";

function PcComponents() {
  const pc = useGLTF("/assets/models/mac-draco.glb");

  return (
    <ThreeCanvas cameraPosition={[0, 10, 45]} isPcComponent={true}>
        <Float floatIntensity={2} speed={2}>
          <mesh scale={2} position={[0, -3, 0]}>
            <primitive object={pc.scene} />
          </mesh>
        </Float>
    </ThreeCanvas>
  );
}

export default PcComponents;
