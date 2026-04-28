"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/shared/config";
import { useEventStore, userEvent } from "@/entities/event";

export const useRouteTracker = () => {
  const pathname = usePathname();
  const setEvent = useEventStore((s) => s.setEvent);

  useEffect(() => {
    const item = navItems.find((i) => pathname === i.href);
    if (!item) return;

    setEvent(userEvent.pageOpen(item.label));
  }, [pathname, setEvent]);
};
