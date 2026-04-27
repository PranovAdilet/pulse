"use client";

import { eventBus, useEventStore } from "@/entities/event";
import { useEffect, useRef, useState } from "react";

type ConnectingStatus = "connecting" | "connected" | "disconnected";

export const useEventStream = () => {
  const paused = useEventStore((s) => s.paused);
  const pausedRef = useRef(paused);

  const [status, setStatus] = useState<ConnectingStatus>("connecting");

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const source = new EventSource("/api/events");

    source.onmessage = (event) => {
      const data = JSON.parse(event.data);
      eventBus.emit(data);
    };

    source.onopen = () => {
      console.log("Source connected");
      setStatus("connected");
    };

    source.onerror = () => {
      source.close();
      setStatus("disconnected");
      console.log("Source disconnected");
    };

    return () => {
      source.close();
    };
  }, []);

  return status;
};
