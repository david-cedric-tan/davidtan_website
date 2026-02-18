"use client";

import { useStore, type ViewMode } from "@/store/useStore";
import { useEffect } from "react";

const STORAGE_KEY = "personal-website-view-mode";

export function ViewModeToggle() {
  const { viewMode, setViewMode } = useStore();
  const is3D = viewMode === "3d";

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    if (stored === "3d" || stored === "barebones") setViewMode(stored);
  }, [setViewMode]);

  const handleToggle = () => {
    const next: ViewMode = is3D ? "barebones" : "3d";
    setViewMode(next);
    if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={is3D}
      aria-label={is3D ? "Switch to simple view" : "Switch to 3D view"}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 select-none ${
        is3D
          ? "bg-david-teal/20 border-david-teal text-david-teal"
          : "bg-white/50 backdrop-blur-sm border-david-gray/30 text-david-gray hover:text-david-blue hover:border-david-teal/50"
      }`}
    >
      <span
        className={`inline-block h-4 w-6 rounded-full border transition-colors ${
          is3D ? "bg-david-teal border-david-teal" : "bg-david-gray/40 border-david-gray/30"
        }`}
      >
        <span
          className={`block h-3 w-3 mt-0.5 rounded-full bg-white shadow transition-transform duration-200 ${
            is3D ? "translate-x-2.5 ml-0.5" : "translate-x-0.5"
          }`}
        />
      </span>
      3D
    </button>
  );
}
