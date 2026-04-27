"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../model/config";
import { cn } from "@/shared/lib";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[200px] h-full p-2 border-r-2 border-white/10">
      <div className="size-full flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            className={cn("rounded-lg p-2 hover:bg-white/5", {
              "bg-white/5": pathname === item.href,
            })}
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};
