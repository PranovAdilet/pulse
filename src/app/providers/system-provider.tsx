"use client";

import { ReactNode, useEffect } from "react";
import { useRouteTracker } from "@/shared/hooks";
import { useEventBusBridge } from "@/entities/event";
import { initEventSystem } from "@/entities/event";

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    initEventSystem();
  }, []);

  useEventBusBridge();
  useRouteTracker();

  return children;
};
