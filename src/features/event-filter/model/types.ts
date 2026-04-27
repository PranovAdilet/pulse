import { EventType } from "@/entities/event";

type EventFilterValue = EventType | "ALL"

export type EventFilterOption = {
    label: string;
    value: EventFilterValue;
};

export type EventFilterState = {
    type: EventFilterValue
    search: string
  }