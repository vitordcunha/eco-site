"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/_lib/utils";

const GetStartedButton = (props: { className?: string }) => {
  const variants: Variants = {
    animate: {
      height: "52px",
      width: "182px",
      right: -1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.button
      className={cn(
        "flex bg-white rounded-full text-sm font-semibold items-center gap-10 h-[50px] w-[180px] relative text-black hover:text-white",
        props.className
      )}
      initial={false}
      whileHover="animate"
    >
      <span className="whitespace-nowrap absolute left-4 z-20 transition-all delay-75">
        Get Started
      </span>

      <motion.div
        className="bg-blue-600 text-white rounded-full p-2 absolute right-1 z-10 flex justify-end items-center"
        variants={variants}
        layout
      >
        <ArrowUpRight />
      </motion.div>
    </motion.button>
  );
};

export default GetStartedButton;
