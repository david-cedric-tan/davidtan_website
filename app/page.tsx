"use client";

import { useStore } from "@/store/useStore";
import { BloombergView } from "@/components/views/BloombergView";
import { View3D } from "@/components/views/View3D";
export default function Home() {
  const { viewMode } = useStore();

  return (
    <div className="relative w-full h-screen">
      {viewMode === "3d" ? <View3D /> : <BloombergView />}
    </div>
  );
}
