"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

import { ExploreCard, TitleText, TypingText } from "../components";

function Explore() {
  const [active, setActive] = useState("world-2");
  return (
    <section id="explore" className={styles.paddings}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
        />
        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              i={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
