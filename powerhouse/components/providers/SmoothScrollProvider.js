'use client';

// Lightweight smooth scroll — uses CSS only, no heavy JS scroll library
// This avoids Lenis overhead that was causing jank on lower-end devices
export default function SmoothScrollProvider({ children }) {
  return <>{children}</>;
}
