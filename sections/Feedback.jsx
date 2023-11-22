"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import styles from "../styles";

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-sm flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-3xl border border-gray-400 relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-3xl text-2xl text-white">
              Samantha
            </h4>
            <p className="mt-2 font-normal sm:text-lg text-xs text-white">
              Founder | Metaversus
            </p>
          </div>
          <p className="mt-6 font-normal sm:text-2xl text-lg text-white">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-3xl"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%] "
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Feedback;
