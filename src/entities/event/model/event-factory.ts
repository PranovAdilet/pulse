
import { Event, EventType, EventLevel } from "@/entities/event";

type CreateEventParams = {
  type: EventType;
  level?: EventLevel;
  source: "USER" | "SYSTEM";
  payload?: Record<string, unknown>;
};

export const createEvent = ({
  type,
  level = "INFO",
  source,
  payload,
}: CreateEventParams): Event => {
  return {
    id: crypto.randomUUID(),
    type,
    level,
    source,
    timestamp: Date.now(),
    payload,
  };
};


export const userEvent = {
  search: (value: string) =>
    createEvent({
      type: "SEARCH",
      level: "INFO",
      source: "USER",
      payload: { query: value },
    }),

  clear: () =>
    createEvent({
      type: "SYSTEM",
      level: "INFO",
      source: "USER",
      payload: { action: "clear_events" },
    }),

  filterChange: (value: string) =>
    createEvent({
      type: "FILTER",
      level: "INFO",
      source: "USER",
      payload: { filter: value },
    }),

  pageOpen: (page = "Dashboard") =>
    createEvent({
      type: "PAGE_VIEW",
      level: "INFO",
      source: "USER",
      payload: { page },
    }),

  click: (target: string) =>
    createEvent({
      type: "CLICK",
      level: "DEBUG",
      source: "USER",
      payload: { target },
    }),

  inputFocus: (field: string) =>
    createEvent({
      type: "INPUT",
      level: "DEBUG",
      source: "USER",
      payload: { field, action: "focus" },
    }),

  inputClear: (field: string) =>
    createEvent({
      type: "INPUT",
      level: "INFO",
      source: "USER",
      payload: { field, action: "clear" },
    }),
};
