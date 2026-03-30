"use client";

import React from "react";

export default function Template({ children }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out fill-mode-both">
      {children}
    </div>
  );
}
