import { useRef, useReducer, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";

const accents = ["#4060ff", "#00fbff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: "white" },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
  { color: accents[accent], accent: true },
];

function Connectors() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Canvas
      gl={{ antialias: true }}
      style={{ width: "100%", height: "450px" }}
      camera={{ fov: 40, position: [0, 0, 15] }}
    >
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        <Connector position={[10, 10, 5]}>
          <Model />
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
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
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
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
      <CuboidCollider args={[1, 1, 1]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
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
}

function Model({ children, color = "white", roughness = 0 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshToonMaterial metalness={0} roughness={roughness} />
      {children}
    </mesh>
  );
}

export default Connectors;
