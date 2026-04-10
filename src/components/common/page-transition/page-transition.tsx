"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Easing, Variants } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type TransitionContextType = {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
};

// ─── Context ──────────────────────────────────────────────────────────────────

export const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

// ─── Config ───────────────────────────────────────────────────────────────────

const COLS = 8;
const ROWS = 6;
const TILE_COLOR = "#4c5c39";
const TILE_IN_DUR = 280;
const TILE_OUT_DUR = 240;
const MAX_STAGGER_IN = 320;
const MAX_STAGGER_OUT = 220;

const totalInDuration = MAX_STAGGER_IN + TILE_IN_DUR;
const swapAt = totalInDuration + 60;
const totalOutDuration = MAX_STAGGER_OUT + TILE_OUT_DUR;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTileDelay(col: number, row: number, maxDelay: number): number {
  const cx = COLS / 2 - 0.5;
  const cy = ROWS / 2 - 0.5;
  const maxDist = Math.sqrt(cx * cx + cy * cy);
  const dist = Math.sqrt((col - cx) ** 2 + (row - cy) ** 2);
  return (dist / maxDist) * maxDelay;
}

// ─── Tile ─────────────────────────────────────────────────────────────────────

type MosaicPhase = "idle" | "in" | "out";

interface TileProps {
  col: number;
  row: number;
  phase: MosaicPhase;
}

function Tile({ col, row, phase }: TileProps) {
  const inDelay = getTileDelay(col, row, MAX_STAGGER_IN);
  const outDelay = getTileDelay(col, row, MAX_STAGGER_OUT);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: `${(row / ROWS) * 100}%`,
        left: `${(col / COLS) * 100}%`,
        width: `${100 / COLS}%`,
        height: `${100 / ROWS}%`,
        backgroundColor: TILE_COLOR,
        zIndex: 9998,
        originX: 0.5,
        originY: 0.5,
      }}
      initial={{ scale: 0, borderRadius: "4px" }}
      animate={
        phase === "in"
          ? {
              scale: 1,
              borderRadius: "0px",
              transition: {
                duration: TILE_IN_DUR / 1000,
                delay: inDelay / 1000,
                ease: [0.76, 0, 0.24, 1],
              },
            }
          : {
              scale: 0,
              borderRadius: "4px",
              transition: {
                duration: TILE_OUT_DUR / 1000,
                delay: outDelay / 1000,
                ease: [0.76, 0, 0.24, 1],
              },
            }
      }
    />
  );
}

// ─── Mosaic Grid ──────────────────────────────────────────────────────────────

function MosaicGrid({ phase }: { phase: MosaicPhase }) {
  if (phase === "idle") return null;
  return (
    <>
      {Array.from({ length: ROWS }, (_, row) =>
        Array.from({ length: COLS }, (_, col) => (
          <Tile key={`${col}-${row}`} col={col} row={row} phase={phase} />
        )),
      )}
    </>
  );
}

// ─── Page variants ────────────────────────────────────────────────────────────

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.08,
      ease: [0.76, 0, 0.24, 1], // ✅ fix
    },
  },

  exit: {
    opacity: 0,
    filter: "blur(3px)",
    transition: {
      duration: 0.15,
      ease: "easeIn", // this is fine
    },
  },
};

// ─── Provider ─────────────────────────────────────────────────────────────────

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mosaicPhase, setMosaicPhase] = useState<MosaicPhase>("idle");
  const [displayChildren, setDisplayChildren] = useState(children);
  const isTransitioning = mosaicPhase !== "idle";
  const pendingHref = useRef<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const navigateTo = useCallback(
    (href: string) => {
      // Don't re-trigger if already going to the same page
      if (isTransitioning) return;
      if (href === pathname) return;

      clearTimers();
      pendingHref.current = href;

      // 1. Tiles ripple in
      setMosaicPhase("in");

      // 2. Navigate at peak coverage
      timers.current.push(
        setTimeout(() => {
          router.push(href);
        }, swapAt),
      );

      // 3. Tiles ripple out
      timers.current.push(
        setTimeout(() => {
          setMosaicPhase("out");
        }, swapAt + 80),
      );

      // 4. Reset
      timers.current.push(
        setTimeout(
          () => {
            setMosaicPhase("idle");
          },
          swapAt + 80 + totalOutDuration + 100,
        ),
      );
    },
    [isTransitioning, pathname, router],
  );

  // Sync children when mosaic is revealing or done
  useEffect(() => {
    if (mosaicPhase === "out" || mosaicPhase === "idle") {
      setDisplayChildren(children);
    }
  }, [children, mosaicPhase]);

  // Cleanup on unmount
  useEffect(() => () => clearTimers(), []);

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      <MosaicGrid phase={mosaicPhase} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
