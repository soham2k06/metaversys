"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";

import { StartSteps, TitleText, TypingText } from "../components";

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="h-5/6 w-5/6 object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-8 flex flex-col max-w-sm gap-6">
            {startingFeatures.map((feature, i) => (
              <StartSteps key={feature} number={i + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
