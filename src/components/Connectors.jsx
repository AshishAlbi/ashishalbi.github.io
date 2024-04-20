import { useRef, useMemo, memo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";
import { isMobileDevice } from "../utils/isMobile";

const shuffle = (number) => {
  const elements = [{ color: "white" }, { color: "#4060ff" }];
  return Array(number)
    .fill()
    .flatMap(() => elements);
};

const Connectors = () => {
  const number = isMobileDevice() ? 2 : 7;
  const connectors = useMemo(() => shuffle(number), [number]);
  return (
    <Canvas
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%", borderRadius: "30px" }}
      camera={{ fov: 40, position: [0, 0, 8] }}
    >
      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector position={[10, 10, 5]}>
          <Model />
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256} preset="night">
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

const Connector = memo(({ position, children, color, accent }) => {
  const api = useRef();
  const pos = useMemo(
    () =>
      position || [
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
      ],
    [position]
  );
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      new THREE.Vector3()
        .copy(api.current.translation())
        .negate()
        .multiplyScalar(0.2)
    );
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[1]} />
      {children ? children : <Model color={color} />}
      {accent && <pointLight intensity={4} distance={2.5} color={color} />}
    </RigidBody>
  );
});

const Pointer = () => {
  const ref = useRef();
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ pointer, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
};

const Model = ({ color = "white", roughness = 0 }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial metalness={0} roughness={roughness} />
    </mesh>
  );
};

export default Connectors;
