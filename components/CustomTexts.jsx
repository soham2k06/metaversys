"use client";

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

export function TypingText({ title, textStyles }) {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-sm text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function TitleText({ title, textStyles }) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`text-white mt-2 font-bold md:text-6xl text-4xl ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
}
