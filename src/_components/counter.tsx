"use client";

import { animate, inView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  className?: string;
  suffix?: string;
}

function Counter({ from, to, className, suffix = "" }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (nodeRef.current) {
      const node = nodeRef.current;
      const stop = inView(node, () => {
        animate(from, to, {
          duration: 1.5,
          delay: 0.2,
          onUpdate(value) {
            node.textContent = value.toFixed(0) + suffix;
          },
        });
      });

      return () => stop();
    }
  }, [from, to]);

  return <p ref={nodeRef} className={className} />;
}

export default Counter;
