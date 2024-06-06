import { useTheme } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function PcComponents() {
  const theme = useTheme();
  const groundRef = useRef();
  const pc = useGLTF("/assets/models/gaming_pc_setup.glb");
  useEffect(() => {
    pc.scene.position.y = -8;
  }, [pc]);
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 35, position: [0, 10, 45] }}
      gl={{ antialias: true }}>
      <color
        attach="background"
        args={[theme.palette.mode == "light" ? "white" : "#000000"]}
      />
      <ambientLight intensity={0.6} />
      <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      <mesh castShadow>
        <primitive object={pc.scene}/>
      </mesh>
    </Canvas>
  );
}

export default PcComponents;
