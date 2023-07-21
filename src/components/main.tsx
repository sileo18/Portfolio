"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MainProps {
  lang: boolean;
}

export default function Main({ lang }: MainProps) {
  return (
    <main className="flex items-center justify-center gap-4 px-4 mt-32  z-10">
      <AnimatePresence>
        <motion.div
          key="photo"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="bg-black w-[440px] h-[580px] flex shadow-lg md:flex sm:hidden"
        >
          .
        </motion.div>

        <motion.div
          key="description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col justify-start gap-9 w-[500px] md:items-start sm:items-center"
        >
          <p className="text-3xl font-700 leading-snug md:text-left sm:text-center">
            {lang
              ? "Olá meu nome é Lucas, atualmente estou estudando e procurando meu primeiro emprego!"
              : "Hi my name is Lucas, I am currently studying and seeking my first job!"}
          </p>

          <p className="text-lg font-400 leading-snug md:text-left sm:text-center">
            {lang
              ? "Atualmente, estou estudando desenvolvimento full stack com foco em TypeScript, Node.js e MySQL, mas também tenho uma boa familiaridade com o desenvolvimento front-end."
              : "I am currently studying full stack development with a focus on TypeScript, Node.js and MySQL, but I also have a good familiarity with front-end development."}
          </p>

          <button className="px-2 py-2 text-center border border-solid border-black rounded-full w-60 font-bold hover:bg-black hover:bg-opacity-20 hover:scale-95 transition-transform">
            { lang ? "Veja meu trabalho" : "Check my work"}
          </button>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
