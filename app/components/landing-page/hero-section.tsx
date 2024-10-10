import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { useState } from "react";
import PentagramImg from "~/images/pentagram.svg";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LampContainer className="pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-neutral-300 to-neutral-400 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Enfrente seus piores medos
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 35 }}
        transition={{
          delay: 0.33,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-md font-light tracking-tight text-transparent md:text-2xl"
      >
        sobreviva tempo o suficiente para ver o que está do outro lado
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.63,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="rounded-xl overflow-hidden mt-4"
      >
        <iframe
          title="teaser novagen"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/3-Y1cnxPOvM"
          height={280}
          allowFullScreen
        ></iframe>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded bg-red-800 px-4 py-3 hover:bg-red-900 transition-colors text-white flex items-center gap-2"
      >
        Garanta o seu agora
        <div className="relative size-6">
          <motion.img
            src={PentagramImg}
            alt="Pentagram"
            className="absolute w-full h-auto"
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 1, rotate: isHovered ? 360 + 180 : 0 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.button>
    </LampContainer>
  );
};

export default HeroSection;
