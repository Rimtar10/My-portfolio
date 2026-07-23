import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const PHI = (1 + Math.sqrt(5)) / 2;
const TERRACOTTA = "#C15B3D";
const OCHRE = "#D9A441";
const ROSE = "#B86B77";

/** Builds the 12 vertices of a regular icosahedron, radius-normalized. */
function useIcosahedronPoints(radius: number) {
  return useMemo(() => {
    const raw: [number, number, number][] = [];
    for (const s1 of [1, -1]) {
      for (const s2 of [1, -1]) {
        raw.push([0, s1, s2 * PHI]);
        raw.push([s1, s2 * PHI, 0]);
        raw.push([s2 * PHI, 0, s1]);
      }
    }
    const vertices = raw.map(([x, y, z]) =>
      new THREE.Vector3(x, y, z).normalize().multiplyScalar(radius),
    );

    // Find the true icosahedron edges: each vertex connects to its 5
    // nearest neighbors, so we find the minimum pairwise distance and
    // keep every pair within a small tolerance of it.
    let minDist = Infinity;
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const d = vertices[i].distanceTo(vertices[j]);
        if (d < minDist) minDist = d;
      }
    }

    const edges: [number, number][] = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        if (vertices[i].distanceTo(vertices[j]) <= minDist * 1.05) {
          edges.push([i, j]);
        }
      }
    }

    return { vertices, edges };
  }, [radius]);
}

interface IcosahedronLayerProps {
  radius: number;
  coreColor: string;
  coreOpacity: number;
  wireColor: string;
  rotationSpeed: number;
  nodeSize: number;
  nodeColors: [string, string];
}

function IcosahedronLayer({
  radius,
  coreColor,
  coreOpacity,
  wireColor,
  rotationSpeed,
  nodeSize,
  nodeColors,
}: IcosahedronLayerProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { vertices, edges } = useIcosahedronPoints(radius);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    for (const [a, b] of edges) {
      positions.push(vertices[a].x, vertices[a].y, vertices[a].z);
      positions.push(vertices[b].x, vertices[b].y, vertices[b].z);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, [vertices, edges]);

  // Slow idle rotation, independent of drag — stays gentle and ambient.
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
      groupRef.current.rotation.x += delta * rotationSpeed * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* faint flat-shaded core so the form reads as solid, not just a wire skeleton */}
      <mesh>
        <icosahedronGeometry args={[radius, 0]} />
        <meshStandardMaterial
          color={coreColor}
          flatShading
          transparent
          opacity={coreOpacity}
        />
      </mesh>

      {/* wireframe edges */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={wireColor} transparent opacity={0.85} />
      </lineSegments>

      {/* node spheres at each vertex */}
      {vertices.map((v, i) => (
        <mesh key={i} position={v}>
          <sphereGeometry args={[nodeSize, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? nodeColors[0] : nodeColors[1]}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.05;
    if (innerRef.current) innerRef.current.rotation.y -= delta * 0.11;
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-3, -2, -4]} intensity={0.4} />

      {/* Outer, larger wireframe — the primary signature shape */}
      <group ref={outerRef}>
        <IcosahedronLayer
          radius={1.9}
          coreColor={TERRACOTTA}
          coreOpacity={0.1}
          wireColor={OCHRE}
          rotationSpeed={0.08}
          nodeSize={0.08}
          nodeColors={[TERRACOTTA, OCHRE]}
        />
      </group>

      {/* Inner, smaller layer counter-rotating for depth and density */}
      <group ref={innerRef} rotation={[0.6, 0.3, 0]}>
        <IcosahedronLayer
          radius={0.95}
          coreColor={ROSE}
          coreOpacity={0.14}
          wireColor={ROSE}
          rotationSpeed={0.14}
          nodeSize={0.05}
          nodeColors={[ROSE, TERRACOTTA]}
        />
      </group>

      {/* Ambient particle depth around both layers */}
      <Sparkles
        count={90}
        scale={5.5}
        size={2.4}
        speed={0.25}
        opacity={0.55}
        color={OCHRE}
      />
      <Sparkles
        count={50}
        scale={4.2}
        size={1.6}
        speed={0.15}
        opacity={0.4}
        color={TERRACOTTA}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function NodeClusterScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <Scene />
    </Canvas>
  );
}
