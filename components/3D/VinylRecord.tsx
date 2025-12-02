"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Ring, Box } from "@react-three/drei";
import { Mesh } from "three";
import { useStore } from "@/store/useStore";

interface VinylRecordProps {
  position: [number, number, number];
}

export function VinylRecord({ position }: VinylRecordProps) {
  const vinylRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setActivePanel } = useStore();

  useFrame((state) => {
    if (vinylRef.current) {
      // Continuous spinning
      vinylRef.current.rotation.y += 0.005;

      // Gentle floating animation
      vinylRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.8) * 0.015;

      // Hover effect
      if (hovered) {
        vinylRef.current.scale.setScalar(1.1);
        vinylRef.current.rotation.y += 0.02; // Spin faster on hover
      } else {
        vinylRef.current.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
      }
    }
  });

  const handleClick = () => {
    setActivePanel("music");
  };

  return (
    <group position={position}>
      {/* Vinyl Record */}
      <Cylinder
        ref={vinylRef}
        args={[0.4, 0.4, 0.02]}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <meshStandardMaterial
          color={hovered ? "#0d9488" : "#1f2937"}
          roughness={0.8}
          metalness={0.1}
        />
      </Cylinder>

      {/* Center Hole */}
      <Cylinder args={[0.05, 0.05, 0.03]} position={[0, 0, 0.01]}>
        <meshStandardMaterial color="#374151" />
      </Cylinder>

      {/* Label */}
      <Ring args={[0.05, 0.15, 32]} position={[0, 0, 0.015]}>
        <meshStandardMaterial color="#0d9488" />
      </Ring>

      {/* Grooves */}
      <Ring args={[0.15, 0.16, 32]} position={[0, 0, 0.01]}>
        <meshStandardMaterial color="#374151" />
      </Ring>
      <Ring args={[0.25, 0.26, 32]} position={[0, 0, 0.01]}>
        <meshStandardMaterial color="#374151" />
      </Ring>
      <Ring args={[0.35, 0.36, 32]} position={[0, 0, 0.01]}>
        <meshStandardMaterial color="#374151" />
      </Ring>

      {/* Now Playing Rack */}
      <Cylinder args={[0.45, 0.45, 0.05]} position={[0, -0.05, 0]} castShadow>
        <meshStandardMaterial color="#1e293b" roughness={0.6} metalness={0.2} />
      </Cylinder>

      {/* Hover Indicator */}
      {hovered && (
        <Box args={[0.1, 0.1, 0.1]} position={[0, 0.6, 0]}>
          <meshStandardMaterial
            color="#0d9488"
            emissive="#0d9488"
            emissiveIntensity={0.5}
          />
        </Box>
      )}
    </group>
  );
}
