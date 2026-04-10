"use client";

import { forwardRef } from "react";
import { usePageTransition } from "./page-transition";

type TransitionLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/**
 * TransitionLink — forwardRef so it works inside shadcn NavigationMenuLink asChild.
 * Drop-in replacement for <Link> / <a>. Triggers the mosaic transition on click.
 */
const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  ({ href, onClick, children, ...rest }, ref) => {
    const { navigateTo, isTransitioning } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Let browser handle modifier keys
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault(); // 🚨 always take control FIRST

      if (!isTransitioning) {
        navigateTo(href);
      }

      onClick?.(e); // call after (optional)
    };

    return (
      <a ref={ref} href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  },
);

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;

// "use client";

// import { forwardRef } from "react";
// import Link from "next/link";
// import { usePageTransition } from "./page-transition";

// const TransitionLink = forwardRef<
//   HTMLAnchorElement,
//   React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
// >(({ href, children, ...rest }, ref) => {
//   const { navigateTo, isTransitioning } = usePageTransition();

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     // allow new tab etc
//     if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

//     e.preventDefault();

//     if (!isTransitioning) {
//       navigateTo(href);
//     }
//   };

//   return (
//     <Link ref={ref} href={href} onClick={handleClick} {...rest}>
//       {children}
//     </Link>
//   );
// });

// TransitionLink.displayName = "TransitionLink";

// export default TransitionLink;
