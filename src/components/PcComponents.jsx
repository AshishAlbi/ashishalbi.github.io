import { useTheme } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

function PcComponents() {
    const theme = useTheme()
  const pc = useGLTF("src/assets/models/gaming_pc_setup.glb");
  useEffect(()=>{
    pc.scene.position.set(0,0,0)
  },[pc])
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 40, position: [0, 10, 60] }}
      gl={{ antialias: false }}
    >
      <color attach="background" args={[theme.palette.mode=='light'? "white":"#1f1f1f"]} />
      <ambientLight intensity={.5} />
      <OrbitControls autoRotate enableZoom={false} enablePan={false}/>
      <group>
        <primitive object={pc.scene} />
      </group>
    </Canvas>
  );
}

export default PcComponents;
