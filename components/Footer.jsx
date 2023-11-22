"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-6xl text-4xl text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-3xl gap-3 text-white"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-6 h-6 object-contain"
            />
            <span className="font-normal text-base uppercase">
              enter metaverse
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-12 h-0.5 bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-2xl text-white">Metaversus</h4>
            <p className="font-normal text-sm text-white opacity-50">
              Copyright © 2023 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-6 h-6 object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
