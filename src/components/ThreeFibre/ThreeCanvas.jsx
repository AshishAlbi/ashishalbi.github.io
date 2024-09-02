import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "@mui/material/styles";
import { Html } from "@react-three/drei";
import React, { Suspense } from "react";

const ThreeCanvas = ({
  cameraPosition,
  isPcComponent,
  children,
  handleConnecterClick = undefined,
}) => {
  const theme = useTheme();
  return (
    <Canvas
      onClick={handleConnecterClick}
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%", borderRadius: "30px" }}
      camera={{ fov: 35, position: cameraPosition }}>
      <color
        attach="background"
        args={[theme.palette.mode === "light" ? "white" : "black"]}
      />
      <Suspense fallback={<Html center>Loading......</Html>}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        {isPcComponent && <Environment preset="city" />}
        {children}
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;
