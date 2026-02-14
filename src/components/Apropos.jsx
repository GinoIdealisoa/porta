import React from 'react';
import { motion } from 'framer-motion';

import image3 from '../assets/images/image3.jpeg';

// ── Animations ─────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const splashVariants = {
  initial: { scale: 1.1, opacity: 0.5 },
  animate: {
    scale: [1.1, 1.25, 1.1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Apropos() {
  return (
    <section
      id="propos"
      className="
        relative min-h-screen flex items-center justify-center
        bg-white dark:bg-[#0a0a0a]
        text-black dark:text-white
        px-6 sm:px-10 lg:px-20
        py-24
        overflow-hidden
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.10),transparent_50%)]" />

      <motion.div
        className="
          relative z-10 max-w-7xl w-full
          grid grid-cols-1 lg:grid-cols-2
          gap-16 items-center
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ── TEXTE ────────────────────────────────────────────── */}
        <div className="space-y-6 text-justify">

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            À propos de moi
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Jeune diplômé motivé, passionné par le monde numérique, spécialisé dans la création d’applications modernes avec <span className="font-semibold">Laravel</span> et <span className="font-semibold">React</span>.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Titulaire d’une Licence en Informatique de Gestion et d’un Master 2 en Génie Logiciel, je suis motivé par la conception de solutions innovantes, performantes et faciles à utiliser.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Intéressé par l’intégration de l’intelligence artificielle dans Laravel, je vise à concevoir des applications plus astucieuses et intelligentes.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Curieux, autonome et créatif, je cherche à enrichir mes connaissances et à contribuer à des projets ambitieux.
          </motion.p>

        </div>

        {/* ── IMAGE ─────────────────────────────────────────────── */}
        <div className="relative flex justify-center lg:justify-end group">

          <motion.div
            className="
              absolute -inset-16
              bg-gradient-to-br from-sky-400/40 via-cyan-300/20 to-blue-500/10
              rounded-full blur-3xl
              opacity-70
            "
            variants={splashVariants}
            initial="initial"
            animate="animate"
          />

          <div
            className="
              relative w-full max-w-md lg:max-w-lg
              rounded-3xl overflow-hidden
              shadow-2xl
              border border-white/10
            "
          >
            <img
              src={image3}
              alt="Gino Idealisoa"
              className="
                w-full
                h-[320px]
                md:h-[420px]
                lg:h-[520px]
                object-cover
              "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
