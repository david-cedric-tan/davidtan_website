"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Plane } from "@react-three/drei";
import { Mesh } from "three";
import { HardDrive } from "./HardDrive";
import { Monitor } from "./Monitor";
import { VinylRecord } from "./VinylRecord";
import { FloatingElements } from "./FloatingElements";

export function Room() {
  const roomRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  return (
    <group ref={roomRef}>
      {/* Floor */}
      <Plane
        args={[20, 20]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e2e8f0" roughness={0.8} metalness={0.1} />
      </Plane>

      {/* Walls */}
      {/* Back wall */}
      <Plane args={[20, 8]} position={[0, 2, -10]} receiveShadow>
        <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
      </Plane>

      {/* Left wall */}
      <Plane
        args={[20, 8]}
        position={[-10, 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
      </Plane>

      {/* Right wall */}
      <Plane
        args={[20, 8]}
        position={[10, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
      </Plane>

      {/* Main Desk */}
      <Box args={[4, 0.1, 2]} position={[0, -0.5, -2]} castShadow receiveShadow>
        <meshStandardMaterial color="#475569" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Desk Legs */}
      <Box args={[0.1, 1, 0.1]} position={[-1.8, -1, -2.8]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.8, -1, -2.8]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.8, -1, -1.2]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.8, -1, -1.2]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Box>

      {/* Side Table */}
      <Box
        args={[1.5, 0.1, 1.5]}
        position={[3, -0.3, -1]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#475569" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Side Table Leg */}
      <Cylinder args={[0.05, 0.05, 0.6]} position={[3, -0.6, -1]} castShadow>
        <meshStandardMaterial color="#374151" />
      </Cylinder>

      {/* Interactive Objects */}
      <HardDrive position={[0.5, -0.3, -1.5]} />
      <Monitor position={[0, 0.2, -2]} />
      <VinylRecord position={[3, -0.1, -1]} />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Ambient Lighting Elements */}
      <pointLight position={[0, 3, -2]} intensity={0.3} color="#0d9488" />
      <pointLight position={[3, 2, -1]} intensity={0.2} color="#1e3a8a" />
    </group>
  );
}
