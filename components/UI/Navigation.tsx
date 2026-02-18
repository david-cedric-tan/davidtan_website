"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";

export function Navigation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { setActivePanel, setCameraPosition, viewMode } = useStore();
  const is3D = viewMode === "3d";

  const navItems = [
    { id: "about", label: "About", action: () => setActivePanel("about") },
    {
      id: "projects",
      label: "Projects",
      action: () => setActivePanel("projects"),
    },
    {
      id: "contact",
      label: "Contact",
      action: () => setActivePanel("contact"),
    },
  ];

  const cameraControls = [
    { id: "home", label: "Home", action: () => setCameraPosition("home") },
    {
      id: "desk",
      label: "Desk Focus",
      action: () => setCameraPosition("desk"),
    },
    {
      id: "overview",
      label: "Room Overview",
      action: () => setCameraPosition("overview"),
    },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-40 p-8">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="w-11 h-11 bg-gradient-to-br from-david-blue to-david-teal rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base">DT</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-david-blue to-david-teal bg-clip-text text-transparent font-sf-pro">
            David Tan
          </h1>
        </div>

        {/* Navigation Links — flex-1 keeps them centered between logo and right controls */}
        <div className="flex-1 flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-4 py-2 text-base font-medium transition-all duration-300 ${
                hovered === item.id
                  ? "text-david-teal"
                  : "text-david-gray hover:text-david-blue"
              }`}
            >
              {item.label}
              {hovered === item.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-david-blue to-david-teal rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Camera controls + fixed-width spacer that reserves room for the toggle */}
        <div className="flex shrink-0 items-center gap-3">
          {is3D && (
            <div className="flex items-center space-x-2">
              {cameraControls.map((control) => (
                <button
                  key={control.id}
                  onClick={control.action}
                  className="px-3 py-1 text-xs bg-white/50 backdrop-blur-sm border border-david-gray/30 rounded-full text-david-gray hover:text-david-blue hover:border-david-teal/50 transition-all duration-300"
                >
                  {control.label}
                </button>
              ))}
            </div>
          )}
          {/* 142 px = toggle width (110) + right-8 offset (32) */}
          <div className="w-[142px] shrink-0" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
