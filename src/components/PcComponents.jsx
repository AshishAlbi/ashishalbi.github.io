import { useTheme } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function PcComponents() {
  const theme = useTheme();
  const groundRef = useRef();
  const pc = useGLTF("src/assets/models/gaming_pc_setup.glb");
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
        args={[theme.palette.mode == "light" ? "white" : "#1f1f1f"]}
      />
      <ambientLight intensity={0.5} />
      <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      <mesh position={[0, -10, 0]}>
        <boxGeometry args={[5, 5, 0.1]}/>
        <meshBasicMaterial color={"grey"} />
      </mesh>
      <group>
        <primitive object={pc.scene} />
      </group>
    </Canvas>
  );
}

export default PcComponents;
