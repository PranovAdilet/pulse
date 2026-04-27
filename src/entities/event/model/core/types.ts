export type EventType = "ERROR" | "SUCCESS" | "INFO" | "DEBUG" 

export type Event = {
    id: string;
    type: EventType;
    message: string;
    timestamp: number;

    source: "USER" | "SYSTEM";
}

