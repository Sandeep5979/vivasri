// NumberStats.jsx
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { id: 1, icon: "assets/img/icons/staticon1.png", target: 4251, label: "Grooms" },
  { id: 2, icon: "assets/img/icons/staticon2.png", target: 5148, label: "Brides" },
  { id: 3, icon: "assets/img/icons/staticon3.png", target: 1875, label: "Divorcee Grooms" },
  { id: 4, icon: "assets/img/icons/staticon4.png", target: 2876, label: "Divorcee Brides" },
  { id: 5, icon: "assets/img/icons/staticon5.png", target: 8975, label: "Success Stories" },
];

/**
 * Hook: returns boolean visible for a DOM element ref.
 * Falls back to boundingClientRect check if IntersectionObserver doesn't work.
 */
function useIsVisible(ref, { threshold = 0.25, rootMargin = "0px", debug = false } = {}) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);
  const checkRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      if (debug) console.warn("useIsVisible: ref.current is null");
      return;
    }

    // IntersectionObserver path
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(
        (entries, obs) => {
          const e = entries[0];
          const nowVisible = e.isIntersecting && e.intersectionRatio >= threshold;
          if (debug) console.log("IO entry", e.isIntersecting, e.intersectionRatio, "=>", nowVisible);
          if (nowVisible) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        { threshold: Array.isArray(threshold) ? threshold : [threshold], rootMargin }
      );

      observerRef.current.observe(el);
      return () => {
        observerRef.current && observerRef.current.disconnect();
        if (debug) console.log("IO disconnected");
      };
    }

    // Fallback: boundingClientRect on scroll/resize
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      // visible if any part within viewport (can adapt threshold)
      const verticallyVisible = r.top < vh && r.bottom > 0;
      const horizontallyVisible = r.left < vw && r.right > 0;
      const nowVisible = verticallyVisible && horizontallyVisible;
      if (debug) console.log("Fallback check", r.top, r.bottom, "vh", vh, "=>", nowVisible);
      setVisible(nowVisible);
    };

    checkRef.current = () => {
      // throttle via requestAnimationFrame
      if (checkRef._ticking) return;
      checkRef._ticking = true;
      requestAnimationFrame(() => {
        check();
        checkRef._ticking = false;
      });
    };

    check(); // initial
    window.addEventListener("scroll", checkRef.current, { passive: true });
    window.addEventListener("resize", checkRef.current);
    return () => {
      window.removeEventListener("scroll", checkRef.current);
      window.removeEventListener("resize", checkRef.current);
    };
  }, [ref, threshold, rootMargin, debug]);

  return visible;
}

/** Counter component: animates from 0 -> target when visible.
 * Props:
 *   - target: number
 *   - duration: ms
 *   - once: boolean (if true, animate only once; if false, reset when out of view)
 *   - resetOnLeave: boolean (alias for once=false)
 *   - debug: boolean
 */
function Counter({ target, duration = 1400, once = true, resetOnLeave = false, debug = false }) {
  const ref = useRef(null);
  // useIsVisible will update frequently as intersection changes
  const visible = useIsVisible(ref, { threshold: 0.25, rootMargin: "0px", debug });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // If it's visible and hasn't started (or we allow restarts), begin animation
    const shouldStart = visible && (!startedRef.current || !once);
    if (shouldStart) {
      if (debug) console.log("Counter start", target);
      startedRef.current = true;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        setCount(current);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setCount(target);
          rafRef.current = null;
        }
      };

      // cancel any previous animation
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    }

    // Reset when leaving view if resetOnLeave (or once === false && user wants repeats)
    if (!visible && (resetOnLeave || !once)) {
      if (debug) console.log("Counter leaving view, reset", target);
      startedRef.current = false;
      setCount(0);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [visible, target, duration, once, resetOnLeave, debug]);

  return (
    <div ref={ref} className="counter text-white" aria-hidden="true">
      {count.toLocaleString()}
    </div>
  );
}

export default function NumberStats({ debug = false }) {
  return (
    <section className="numberstats overflow-hidden bg2 pt-50 pb-50">
      <div className="site-width">
        <div className="row">
          {stats.map((stat) => (
            <div className="col-6 col-lg" key={stat.id}>
              <div className="statcol my-2 text-center">
                <img src={stat.icon} alt={stat.label} className="mx-auto" />
                <Counter
                  target={stat.target}
                  duration={1400}
                  once={true} // set false to allow re-trigger when scrolling away/back
                  resetOnLeave={false}
                  debug={debug}
                />
                <h4 className="text-white">{stat.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
