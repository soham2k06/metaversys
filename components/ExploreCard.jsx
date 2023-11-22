"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import styles from "../styles";

function ExploreCard({ id, imgUrl, title, i, active, handleClick }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", i * 0.5, 1)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-cente min-w-[170px] h-[700px] transition-[flex] duration-700 ease-out cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full rounded-3xl object-cover"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-2xl text-lg text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-black/50 rounded-b-3xl">
          <div
            className={`${styles.flexCenter} h-16 w-16 rounded-3xl glassmorphism mb-4`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-base text-white uppercase">
            Enter the metaverse
          </p>
          <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}

export default ExploreCard;
