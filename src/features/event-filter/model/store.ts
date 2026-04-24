import { create } from "zustand";
import {  EventFilterState } from "./types";

type EventFilterStore = {
  filter: EventFilterState
  setFilter: (filter: EventFilterState) => void
};

export const useEventFilterStore = create<EventFilterStore>((set) => ({
    filter: {
      type: "ALL"
    },
    setFilter: (filter) => set({filter})
  }));


