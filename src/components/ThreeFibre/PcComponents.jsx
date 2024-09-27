import { useGLTF } from "@react-three/drei";
import React from "react";
import ThreeCanvas from "./ThreeCanvas";

function PcComponents() {
  const pc = useGLTF("/models/mac-draco.glb");
  const isMobile = isMobileDevice();

  return (
    <ThreeCanvas cameraPosition={[0, 10, 45]} isPcComponent={true}>
      {isMobile ? (
        <mesh scale={2} position={[0, -3, 0]}>
          <primitive object={pc.scene} />
        </mesh>
      ) : (
          <mesh scale={2} position={[0, -3, 0]}>
            <primitive object={pc.scene} />
          </mesh>
      )}
    </ThreeCanvas>
  );
}

export default PcComponents;
