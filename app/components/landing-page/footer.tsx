import { motion } from "framer-motion";
import Pentagram from "~/images/pentagram.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <div className="relative size-6">
          <img src={Pentagram} alt="pentagram logo" />
        </div>
        <p className="text-sm">
          &copy; {currentYear} NOVAGEN. Todos os direitos reservados
        </p>
      </div>
    </motion.footer>
  );
}
