"use client";

import Link from "next/link";
import { navItems } from "../model/config";

export const Sidebar = () => {
  return (
    <aside className="w-[200px] h-full p-2 border-r-2 border-white/10">
      <div className="size-full flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            className="rounded-lg p-2 hover:bg-white/5"
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};
