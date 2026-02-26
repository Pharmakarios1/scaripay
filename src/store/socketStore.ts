import { create } from "zustand";

interface SocketState {
  socket: WebSocket | null;
  setSocket: (socket: WebSocket) => void;
  clearSocket: () => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,

  setSocket: (socket) => set({ socket }),

  clearSocket: () => set({ socket: null }),
}));
