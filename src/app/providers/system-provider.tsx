"use client";

import { ReactNode } from "react";
import { useRouteTracker } from "@/features/route-tracking";

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  // useEffect(() => {
  //   initEventSystem();
  // }, []);

  // useEventBusBridge();
  useRouteTracker();

  return children;
};
