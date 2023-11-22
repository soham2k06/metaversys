"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function InsightCard({ imgUrl, title, subtitle, i }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", i * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt="planet-01"
        className="md:w-72 w-full rounded-3xl object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-16 flex flex-col max-w-2xl">
          <h4 className="font-normal lg:text-4xl text-2xl text-white">
            {title}
          </h4>
          <p className="mt-4 font-normal lg:text-lg text-sm text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-24 h-24 rounded-full bg-transparent border border-white">
          <img
            src="arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default InsightCard;
