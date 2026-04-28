import { create } from "zustand";
import { Event } from "./types";

type State = {
  events: Event[];
  buffer: Event[]

  paused: boolean;
  setPaused: (v: boolean) => void;

  setEvent: (event: Event) => void;
  setEvents: (events: Event[]) => void;

  flushBuffer: () => void

  clear: () => void
};

export const useEventStore = create<State>((set) => ({
    events: [],
    buffer: [],
    paused: false,
    setPaused: (v) => set({ paused: v }),
    clear: () => set({ events: [], buffer: [] }),
    setEvents: (events) => set({ events }),
    setEvent: (event) =>
      set((state) => {
        if (state.paused) {
          return {
            buffer: [event, ...state.buffer].slice(0, 100),
          };
        }
        return {
          events: [event, ...state.events].slice(0, 100),
        };
      }),
      flushBuffer: () =>
        set((state) => ({
          events: [...state.buffer, ...state.events].slice(0, 100),
          buffer: [],
      }))
  }));


