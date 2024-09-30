import * as THREE from "three";
import { useRef, useReducer, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";
import ThreeCanvas from "./ThreeCanvas";
import { isMobileDevice } from "../../utils/isMobile";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];
const isMobile = isMobileDevice();

function Connectors() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <ThreeCanvas
      cameraPosition={[0, 0, 15]}
      isPcComponent={false}
      handleConnecterClick={click}>
      <Physics /*debug*/ gravity={[0, 0, 0]}>
        <Pointer />
        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={isMobile ? 0.5 : 1}
              thickness={isMobile ? 0.05 : 0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={isMobile ? 4 : 8}
              resolution={isMobile ? 256 : 512}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={isMobile ? 4 : 8}>
        <N8AO
          distanceFalloff={isMobile ? 0.5 : 1}
          aoRadius={isMobile ? 0.5 : 1}
          intensity={isMobile ? 2 : 4}
        />
      </EffectComposer>
      <Environment resolution={isMobile ? 128 : 256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={isMobile ? 2 : 4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={isMobile ? 1 : 2}
          />
          <Lightformer
            form="circle"
            intensity={isMobile ? 1 : 2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={isMobile ? 1 : 2}
          />
          <Lightformer
            form="circle"
            intensity={isMobile ? 1 : 2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={isMobile ? 1 : 2}
          />
          <Lightformer
            form="circle"
            intensity={isMobile ? 1 : 2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={isMobile ? 4 : 8}
          />
        </group>
      </Environment>
    </ThreeCanvas>
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
      vec.copy(api.current.translation()).negate().multiplyScalar(0.1)
    );
  });
  return (
    <RigidBody
      linearDamping={isMobile ? 6 : 4}
      angularDamping={isMobile ? 2 : 1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}>
      <BallCollider args={[1]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh
      ref={ref}
      castShadow={isMobile ? false : true}
      receiveShadow={isMobile ? false : true}>
      <sphereGeometry args={[1, isMobile ? 16 : 64, isMobile ? 16 : 64]} />
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  );
}

export default Connectors;
