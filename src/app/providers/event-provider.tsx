"use client";

import { initEventSystem } from "@/entities/event";
import { ReactNode, useEffect } from "react";

export const EventProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    initEventSystem();
  }, []);

  return <>{children}</>;
};
