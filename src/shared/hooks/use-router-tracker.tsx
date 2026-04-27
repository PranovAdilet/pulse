"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { eventBus, userEvent } from "@/entities/event";
import { navItems } from "@/widgets/sidebar/model/config";

export const useRouteTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    const item = navItems.find((i) => pathname === i.href);
    if (!item) return;

    eventBus.emit(userEvent.pageOpen(item.label));
  }, [pathname]);
};
