import { create } from "zustand";
import { Event } from "./types";

type State = {
  events: Event[];
  setEvent: (event: Event) => void;
  setEvents: (events: Event[]) => void;
};

export const useEventStore = create<State>((set) => ({
    events: [],
    setEvents: (events) => set({ events }),
    setEvent: (event) =>
      set((state) => ({
        events: [event, ...state.events],
      })),
  }));


