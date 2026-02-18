"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Group } from "three";

interface OBJModelProps {
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  url: string;
}

export function OBJModel({
  position,
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  url,
}: OBJModelProps) {
  const obj = useLoader(OBJLoader, url);
  const modelRef = useRef<Group>(null);

  // Optional: Add animation
  useFrame((state) => {
    if (modelRef.current) {
      // Add any animations here
      // modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={obj.clone()} // Clone to avoid sharing state
      position={position}
      scale={scale}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}
