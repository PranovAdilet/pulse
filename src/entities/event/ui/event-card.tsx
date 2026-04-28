"use client";

import { Event } from "@/entities/event";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="p-3 border border-white/5 hover:bg-white/5 transition">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{event.type}</span>

        <span className="text-gray-400">
          {new Date(event.timestamp).toLocaleTimeString()}
        </span>
      </div>

      <div className="text-xs text-gray-400 flex gap-2">
        <span>[{event.source}]</span>
        <span>[{event.level}]</span>
      </div>

      {event.payload && (
        <div className="mt-2 text-sm text-gray-300">
          {Object.entries(event.payload).map(([key, value]) => (
            <div key={key}>
              <span className="text-gray-500">{key}:</span>{" "}
              <span>{String(value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
