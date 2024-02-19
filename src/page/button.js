"use client";
import React from "react";
import { MovingBorder } from "../components/ui/moving-border"; // Corrected import path

export function MovingBorderDemo() {
  return (
    <div>
      <MovingBorder
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </MovingBorder>
    </div>
  );
}

export { Button as default } from '../components/ui/moving-border';
