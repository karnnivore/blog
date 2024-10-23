"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Theme toggle button to switch between light and dark mode
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full"
    >
      {theme === "dark" ? "🌞" : "🌚"}
    </button>
  );
}