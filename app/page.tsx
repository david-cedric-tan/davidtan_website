"use client";

import { useStore } from "@/store/useStore";
import { BarebonesView } from "@/components/views/BarebonesView";
import { View3D } from "@/components/views/View3D";
import { WimbledonToggle } from "@/components/UI/WimbledonToggle";

export default function Home() {
  const { viewMode } = useStore();

  return (
    <div className="relative w-full h-screen">
      {viewMode === "3d" ? <View3D /> : <BarebonesView />}
      {/* Toggle stays mounted across view switches so animations always play.
          stopPropagation prevents clicks from leaking into the 3D canvas. */}
      <div
        className="fixed top-[10px] right-[10px] z-50"
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onPointerMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <WimbledonToggle />
      </div>
    </div>
  );
}
