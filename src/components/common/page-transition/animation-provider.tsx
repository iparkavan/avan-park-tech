// app/providers/AnimationProvider.tsx
"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
