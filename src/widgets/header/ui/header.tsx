"use client";

export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between shrink-0 border-b border-white/10 px-4">
      <h1>Pulse</h1>
      <p>
        🟢 Connected
        {/* 🔴 Disconnected */}
      </p>
      <button>+ Add Event</button>
    </div>
  );
};
