"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";
import { SystemProvider } from "../providers/system-provider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SystemProvider>
      <div className="flex flex-col size-full">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex">{children}</main>
        </div>
      </div>
    </SystemProvider>
  );
}
