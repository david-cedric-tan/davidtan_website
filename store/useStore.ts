import { create } from "zustand";

export interface StoreState {
  activePanel: string | null;
  cameraPosition: "home" | "desk" | "overview";
  setActivePanel: (panel: string | null) => void;
  setCameraPosition: (position: "home" | "desk" | "overview") => void;
}

export const useStore = create<StoreState>((set) => ({
  activePanel: null,
  cameraPosition: "home",
  setActivePanel: (panel) => set({ activePanel: panel }),
  setCameraPosition: (position) => set({ cameraPosition: position }),
}));
