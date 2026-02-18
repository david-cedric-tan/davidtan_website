"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

interface UWMonitorProps {
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

export function UWMonitor({
  position,
  scale = [0.005, 0.005, 0.005],
  rotation = [0, 0, 0],
}: UWMonitorProps) {
  const { scene } = useGLTF("/models/XMUW34/result.gltf");
  const modelRef = useRef<Group>(null);

  // Optional: Add animation
  useFrame((state) => {
    if (modelRef.current) {
      // Gentle floating animation
      //   modelRef.current.position.y =
      //     position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene.clone()} // Clone to avoid sharing state
      position={position}
      scale={scale}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}

// Preload the model (optional, for better performance)
useGLTF.preload("/models/XMUW34/result.gltf");
