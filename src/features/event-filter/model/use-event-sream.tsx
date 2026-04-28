"use client";

import { useEventStore } from "@/entities/event";
import { useEffect, useRef, useState } from "react";

type ConnectingStatus = "connecting" | "connected" | "disconnected";

export const useEventStream = () => {
  const paused = useEventStore((s) => s.paused);
  const setEvent = useEventStore((s) => s.setEvent);
  const pausedRef = useRef(paused);

  const [status, setStatus] = useState<ConnectingStatus>("connecting");

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const source = new EventSource("/api/events");

    source.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setEvent(data);
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
  }, [setEvent]);

  return status;
};
