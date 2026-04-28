export type EventType =
  | "SEARCH"
  | "PAGE_VIEW"
  | "CLICK"
  | "FILTER"
  | "INPUT"
  | "SYSTEM"
  | "API"
  | "ERROR";

  export type EventLevel =
  | "DEBUG"
  | "INFO"
  | "WARN"
  | "ERROR"
  | "SUCCESS";

export type EventPayload = Record<string, unknown>;

export type Event = {
    id: string;
    type: EventType;
    level: EventLevel;
    source: "USER" | "SYSTEM";
    timestamp: number;
    payload?: EventPayload;
  };
