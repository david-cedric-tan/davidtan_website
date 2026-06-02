"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "@/components/3D/Room";
import { Navigation } from "@/components/UI/Navigation";
import { InfoPanel } from "@/components/UI/InfoPanel";
import { WimbledonToggle } from "@/components/UI/WimbledonToggle";
import { useStore } from "@/store/useStore";

export function View3D() {
  const { activePanel } = useStore();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-david-dark">
      <Navigation />

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
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={2.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <directionalLight position={[-10, 10, -5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={1.2} color="#0d9488" />
          <pointLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
          <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

          <Room />

          <mesh
            position={[0, -1.4, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[20, 20]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>

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

      {activePanel && <InfoPanel />}

      {/* Toggle to return to Bloomberg view */}
      <div
        className="fixed top-[10px] right-[10px] z-50"
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onPointerMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <WimbledonToggle />
      </div>
    </main>
  );
}
