"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "@/components/3D/Room";
import { Navigation } from "@/components/UI/Navigation";
import { InfoPanel } from "@/components/UI/InfoPanel";
import { useStore } from "@/store/useStore";

export default function Home() {
  const { activePanel } = useStore();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-david-dark">
      {/* Navigation */}
      <Navigation />

      {/* 3D Canvas */}
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        shadows
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#0d9488"
          />

          {/* Simple environment */}
          <fog attach="fog" args={["#f8fafc", 10, 50]} />

          {/* Room and Objects */}
          <Room />

          {/* Simple shadow plane */}
          <mesh
            position={[0, -1.4, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>

          {/* Camera Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>

      {/* Info Panel */}
      {activePanel && <InfoPanel />}
    </main>
  );
}
