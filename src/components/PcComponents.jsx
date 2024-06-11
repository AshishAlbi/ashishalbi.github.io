import { useTheme } from "@mui/material/styles";
import {
  Environment,
  Float,
  OrbitControls,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function PcComponents() {
  const theme = useTheme();
  const pc = useGLTF("/assets/models/mac-draco.glb");

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 35, position: [0, 10, 45] }}
      gl={{ antialias: true }}>
      <color
        attach="background"
        args={[theme.palette.mode == "light" ? "white" : "#000000"]}
      />
      <Environment preset="city" />
      <directionalLight position={[0, 10, 45]} intensity={1} />
      {
        <Float floatIntensity={2} speed={2}>
          <mesh scale={2} position={[0, -3, 0]}>
            <primitive object={pc.scene} />
          </mesh>
        </Float>
      }
    </Canvas>
  );
}

export default PcComponents;
