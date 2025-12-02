"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";
import { Mesh } from "three";

export function FloatingElements() {
  const elementsRef = useRef<Mesh[]>([]);

  useFrame((state) => {
    elementsRef.current.forEach((element, index) => {
      if (element) {
        const time = state.clock.elapsedTime;
        const speed = 0.5 + index * 0.2;

        // Floating motion
        element.position.y += Math.sin(time * speed) * 0.001;
        element.position.x += Math.cos(time * speed * 0.7) * 0.001;
        element.position.z += Math.sin(time * speed * 0.5) * 0.001;

        // Gentle rotation
        element.rotation.x += 0.001 * speed;
        element.rotation.y += 0.002 * speed;
        element.rotation.z += 0.001 * speed;
      }
    });
  });

  return (
    <group>
      {/* Floating Cube */}
      <Box
        ref={(el) => el && (elementsRef.current[0] = el)}
        args={[0.1, 0.1, 0.1]}
        position={[2, 1, -3]}
      >
        <meshStandardMaterial
          color="#0d9488"
          transparent
          opacity={0.3}
          emissive="#0d9488"
          emissiveIntensity={0.2}
        />
      </Box>

      {/* Floating Sphere */}
      <Sphere
        ref={(el) => el && (elementsRef.current[1] = el)}
        args={[0.08]}
        position={[-2, 1.5, -4]}
      >
        <meshStandardMaterial
          color="#1e3a8a"
          transparent
          opacity={0.4}
          emissive="#1e3a8a"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Floating Torus */}
      <Torus
        ref={(el) => el && (elementsRef.current[2] = el)}
        args={[0.06, 0.02, 8, 16]}
        position={[1, 2, -2]}
      >
        <meshStandardMaterial
          color="#64748b"
          transparent
          opacity={0.3}
          emissive="#64748b"
          emissiveIntensity={0.1}
        />
      </Torus>

      {/* Additional floating elements */}
      <Box
        ref={(el) => el && (elementsRef.current[3] = el)}
        args={[0.05, 0.05, 0.05]}
        position={[-1, 0.8, -1]}
      >
        <meshStandardMaterial
          color="#0d9488"
          transparent
          opacity={0.2}
          emissive="#0d9488"
          emissiveIntensity={0.1}
        />
      </Box>

      <Sphere
        ref={(el) => el && (elementsRef.current[4] = el)}
        args={[0.06]}
        position={[3, 1.2, -3]}
      >
        <meshStandardMaterial
          color="#1e3a8a"
          transparent
          opacity={0.25}
          emissive="#1e3a8a"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </group>
  );
}
