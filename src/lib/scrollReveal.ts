'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollReveal — wires up IntersectionObserver on all
 * elements with .reveal-up / .reveal-left / .reveal-right / .reveal-scale
 * Adds .revealed when they enter the viewport.
 *
 * Respects prefers-reduced-motion (CSS handles the instant-show fallback).
 */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Accessibility: fallback to instant visible
      document.querySelectorAll<HTMLElement>(
        '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
      ).forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Unobserve for performance once revealed
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    // Function to find and observe all unrevealed target elements
    const observeElements = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        '.reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)'
      );
      targets.forEach((el) => observer.observe(el));
    };

    // 1. Run initially
    observeElements();

    // 2. Watch the DOM for any new dynamically added elements (fixes SPA transition bugs)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);
}

/**
 * ScrollProgress — updates a CSS variable / element width
 * based on how far the user has scrolled the page.
 */
export function useScrollProgress() {
  const pathname = usePathname();

  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('.scroll-progress-bar');
    if (!bar) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Slight delay to ensure page height is calculated after new elements load
    const timer = setTimeout(onScroll, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, [pathname]);
}
