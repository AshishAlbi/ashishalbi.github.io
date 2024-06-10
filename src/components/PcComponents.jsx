import { useTheme } from "@mui/material/styles";
import * as THREE from "three";
import { Float, OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function PcComponents() {
  const theme = useTheme();

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 35, position: [0, 10, 45] }}
      gl={{ antialias: true }}>
      <color
        attach="background"
        args={[theme.palette.mode == "light" ? "white" : "#000000"]}
      />
      <ambientLight intensity={2} />
      <directionalLight position={[0, 10, 45]} intensity={1} />
      {/* <Float floatIntensity={2} speed={2}> */}
      <Model />
      {/* </Float> */}
    </Canvas>
  );
}

function Model() {
  const pc = useGLTF("/assets/models/mac-draco.glb");
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
       Math.cos(t / 10) / 10 + 0.25 ,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
       Math.sin(t / 10) / 4 ,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
     Math.sin(t / 10) / 10 ,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
       (-2 + Math.sin(t)) / 3 ,
      0.1
    );
  });
  return (
    <mesh ref={group} scale={2} position={[0, -3, 0]}>
      <primitive object={pc.scene} />
    </mesh>
  );
}

export default PcComponents;
