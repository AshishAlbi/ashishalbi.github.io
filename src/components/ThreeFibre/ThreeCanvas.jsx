import { Environment, Float, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "@mui/material/styles";
import { Html } from "@react-three/drei";
import React, { Suspense } from "react";
import { isMobileDevice } from "../../utils/isMobile";
const isMobile = isMobileDevice();

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
      gl={{ antialias: !isMobile }}
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
        <Float floatIntensity={2} speed={2}>
          {isPcComponent && (
            <Environment files={'/models/skyenvMap.hdr'} />
          )}
          {children}
        </Float>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;
