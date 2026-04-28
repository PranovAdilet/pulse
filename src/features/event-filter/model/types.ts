import { EventLevel,  } from "@/entities/event";

type EventFilterValue = EventLevel | "ALL"

export type EventFilterOption = {
    label: string;
    value: EventFilterValue;
};

export type EventFilterState = {
    type: EventFilterValue
    search: string
  }