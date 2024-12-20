import { motion } from "framer-motion";
import HoverableCard, { HoverableCardProps } from "../blocks/hoverable-card";

const cards: HoverableCardProps[] = [
  {
    imgBackground: "survival",
    label: "Mundo aberto",
    description:
      "Explore um mundo aberto, e esteja pronto para encontrar amigos e inimigos, armas e muitos zumbis.",
    bgPosition: "left",
  },
  {
    imgBackground: "zombie",
    label: "Sobreviva",
    description:
      "Sobreviva tempo o suficiente para ver o que está do outro lado.",
  },
  {
    imgBackground: "documents",
    label: "Investigue",
    description:
      "Encontre pistas e descubra o que realmente aconteceu naquela noite.",
  },
];

const CardSection = () => {
  return (
    <div className="container max-w-6xl" id="cards">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex justify-between items-center"
      >
        {cards.map((card, index) => (
          <HoverableCard key={index} {...card} />
        ))}
      </motion.div>
    </div>
  );
};

export default CardSection;
