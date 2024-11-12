"use client";
import {
  motion,
  useInView,
  useAnimation,
  TargetAndTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  overflow?: "hidden" | "visible";
  direction: "left2right" | "right2left" | "top2bot" | "bot2top";
  className?: string;
  whileHover?: TargetAndTransition;
  delay?: number;
  duration?: number;
}

export default function SlideInView({
  children,
  width,
  overflow,
  direction,
  className,
  whileHover,
  delay,
  duration,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    }
  }, [inView, animationControl]);

  const variants = {
    right2left: { opacity: 0, x: 100 },
    left2right: { opacity: 0, x: -100 },
    top2bot: { opacity: 0, y: -100 },
    bot2top: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay: delay, duration: duration },
    },
  };

  return (
    <div
      ref={contentRef}
      style={{ position: "relative", width, overflow }}
      className={className}>
      <motion.div
        variants={variants}
        initial={direction}
        animate={animationControl}
        whileHover={whileHover}>
        {children}
      </motion.div>
    </div>
  );
}
