import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const HeroSection = () => {
  return (
    <>
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
          className="rounded-xl overflow-hidden"
        >
          <iframe
            title="teaser novagen"
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/Z5g3mrK82VA"
            height={280}
          ></iframe>
        </motion.div>
      </LampContainer>
    </>
  );
};

export default HeroSection;
