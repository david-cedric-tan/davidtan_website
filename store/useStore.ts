import { create } from "zustand";

export type ViewMode = "barebones" | "3d";

export interface StoreState {
  activePanel: string | null;
  cameraPosition: "home" | "desk" | "overview";
  viewMode: ViewMode;
  setActivePanel: (panel: string | null) => void;
  setCameraPosition: (position: "home" | "desk" | "overview") => void;
  setViewMode: (mode: ViewMode) => void;
}

export const useStore = create<StoreState>((set) => ({
  activePanel: null,
  cameraPosition: "home",
  viewMode: "barebones",
  setActivePanel: (panel) => set({ activePanel: panel }),
  setCameraPosition: (position) => set({ cameraPosition: position }),
  setViewMode: (mode) => set({ viewMode: mode }),
}));
