"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";

import { useRouteTracker } from "@/shared/hooks";
import { EventProvider } from "../providers";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  useRouteTracker();

  return (
    <EventProvider>
      <div className="flex flex-col size-full">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </EventProvider>
  );
}
