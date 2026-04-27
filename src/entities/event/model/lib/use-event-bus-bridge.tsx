"use client";

import { useEffect } from "react";
import { eventBus, useEventStore } from "@/entities/event";

export const useEventBusBridge = () => {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe((event) =>
      useEventStore.getState().setEvent(event),
    );

    return unsubscribe;
  }, []);
};
