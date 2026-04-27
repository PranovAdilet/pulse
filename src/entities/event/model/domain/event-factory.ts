import { Event, EventType } from "@/entities/event";

type CreateEventParams = {
  type: EventType;
  message: string;
  source: "USER" | "SYSTEM";
};

export const createEvent = ({
  type,
  message,
  source,
}: CreateEventParams): Event => {
  return {
    id: crypto.randomUUID(),
    type,
    message,
    source,
    timestamp: Date.now(),
  };
};

export const userEvent = {
  search: (value: string) =>
    createEvent({
      type: "INFO",
      message: `Search: ${value}`,
      source: "USER",
    }),

  filterChange: (value: string) =>
    createEvent({
      type: "INFO",
      message: `Filter changed to ${value}`,
      source: "USER",
    }),

  pageOpen: (page = "Dashboard") =>
    createEvent({
      type: "INFO",
      message: `Page opened: ${page}`,
      source: "USER",
    }),

  click: (target: string) =>
    createEvent({
      type: "DEBUG",
      message: `Click: ${target}`,
      source: "USER",
    }),

  inputFocus: (field: string) =>
    createEvent({
      type: "DEBUG",
      message: `Focus: ${field}`,
      source: "USER",
    }),

  inputClear: (field: string) =>
    createEvent({
      type: "INFO",
      message: `Cleared: ${field}`,
      source: "USER",
    }),
};