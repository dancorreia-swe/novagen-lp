import { motion } from "framer-motion";
import Zombie from "~/images/zombie-nbg.png";
import Pentagram from "~/images/pentagram.png";
import { Link } from "@remix-run/react";

const CtaSection = () => {
  return (
    <motion.section
      className="w-full bg-red-700 mt-40 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      id="register"
    >
      <motion.div className="container max-w-6xl mx-auto relative flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center relative">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatDelay: 0,
              ease: "linear",
            }}
            src={Pentagram}
            alt="Pentagram"
            className="absolute top-12 rotate-2"
          />
          <div className="relative inline-block mt-4">
            <img
              src={Zombie}
              alt="Zombie"
              className="w-32 h-auto object-cover z-20"
            />
          </div>
        </div>
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
          O seu pior pesadelo está prestes a começar
        </h2>
        <motion.button className="relative z-20 bg-black text-white px-6 py-3 rounded-md transition duration-300 hover:bg-gray-800">
          <Link
            to={
              "https://drive.google.com/uc?export=download&id=1DCRQhrblJH5Rl95c8QZtz0ihItHPVxte"
            }
            target="_blank"
            rel="noreferrer"
            download={true}
          >
            Explore agora o mundo de{" "}
            <span className="font-bold uppercase">novagen</span>
          </Link>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CtaSection;
