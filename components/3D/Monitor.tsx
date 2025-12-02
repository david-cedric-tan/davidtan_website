"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Plane } from "@react-three/drei";
import { Mesh } from "three";
import { useStore } from "@/store/useStore";

interface MonitorProps {
  position: [number, number, number];
}

export function Monitor({ position }: MonitorProps) {
  const monitorRef = useRef<Mesh>(null);
  const screenRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setActivePanel } = useStore();

  useFrame((state) => {
    if (monitorRef.current) {
      // Gentle floating animation
      monitorRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.01;

      // Hover effect
      if (hovered) {
        monitorRef.current.scale.setScalar(1.02);
      } else {
        monitorRef.current.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
      }
    }

    if (screenRef.current) {
      // Screen glow effect
      const glowIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      screenRef.current.material.emissiveIntensity = glowIntensity;
    }
  });

  const handleClick = () => {
    setActivePanel("about");
  };

  return (
    <group position={position}>
      {/* Monitor Stand */}
      <Box args={[0.3, 0.1, 0.2]} position={[0, -0.2, 0]} castShadow>
        <meshStandardMaterial color="#374151" roughness={0.4} metalness={0.3} />
      </Box>

      {/* Monitor Base */}
      <Box args={[1.8, 0.05, 1]} position={[0, -0.15, 0]} castShadow>
        <meshStandardMaterial color="#1f2937" roughness={0.3} metalness={0.5} />
      </Box>

      {/* Monitor Screen */}
      <Box
        ref={monitorRef}
        args={[1.6, 0.9, 0.1]}
        position={[0, 0.3, 0]}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <meshStandardMaterial
          color={hovered ? "#1e3a8a" : "#1f2937"}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>

      {/* Screen Display */}
      <Plane ref={screenRef} args={[1.4, 0.7]} position={[0, 0.3, 0.06]}>
        <meshStandardMaterial
          color="#0f172a"
          emissive="#0d9488"
          emissiveIntensity={0.3}
        />
      </Plane>

      {/* Hover Indicator */}
      {hovered && (
        <Box args={[0.1, 0.1, 0.1]} position={[0, 0.8, 0]}>
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
