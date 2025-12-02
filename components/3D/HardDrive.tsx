"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";
import { useStore } from "@/store/useStore";

interface HardDriveProps {
  position: [number, number, number];
}

export function HardDrive({ position }: HardDriveProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setActivePanel } = useStore();

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02;

      // Hover effect
      if (hovered) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.scale.setScalar(1.05);
      } else {
        meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
      }
    }
  });

  const handleClick = () => {
    setActivePanel("projects");
  };

  return (
    <group position={position}>
      {/* Hard Drive Body */}
      <Box
        ref={meshRef}
        args={[0.8, 0.4, 1.2]}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <meshStandardMaterial
          color={hovered ? "#1e3a8a" : "#374151"}
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* LED Light */}
      <Box args={[0.1, 0.05, 0.1]} position={[0.35, 0.15, 0.5]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </Box>

      {/* USB Port */}
      <Box args={[0.15, 0.05, 0.05]} position={[0.35, -0.1, 0.3]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>

      {/* Hover Indicator */}
      {hovered && (
        <Box args={[0.1, 0.1, 0.1]} position={[0, 0.5, 0]}>
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
