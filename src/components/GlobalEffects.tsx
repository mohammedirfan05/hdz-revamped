'use client';

import { useScrollReveal, useScrollProgress } from '@/lib/scrollReveal';

/**
 * GlobalEffects — mounted once at layout level.
 * Wires scroll reveal (IntersectionObserver) and scroll
 * progress bar for the entire site. Renders nothing.
 */
export default function GlobalEffects() {
  useScrollReveal();
  useScrollProgress();
  return null;
}
