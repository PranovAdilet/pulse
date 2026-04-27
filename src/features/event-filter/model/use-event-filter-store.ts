import { create } from "zustand";
import {  EventFilterState } from "./types";

type EventFilterStore = {
  filter: EventFilterState
  setFilter: (filter: Partial<EventFilterState>) => void
 
};

export const useEventFilterStore = create<EventFilterStore>((set) => ({
    filter: {
      type: "ALL",
      search: "",
    },
    setFilter: (filter) => set((state) => ({
      filter: {
        ...state.filter,
        ...filter
      }
    }))
  }));


