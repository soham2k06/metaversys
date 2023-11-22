"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

import { TitleText, TypingText } from "../components";

function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-16 flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-56 sm:right-20 w-16 h-16 rounded-full bg-gray-500">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-20 w-16 h-16 rounded-full bg-gray-500">
            <img src="people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 left-[61%] w-16 h-16 rounded-full bg-gray-500">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
