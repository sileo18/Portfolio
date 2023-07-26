"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MainProps {
  lang: boolean;
}

export default function Main({ lang }: MainProps) {
  return (
    <main className="flex bg-white dark:bg-zinc-800 items-center justify-center gap-4 px-4 mt-32  z-10">
      <AnimatePresence>
        <motion.div
          key="photo"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="bg-[url('../assets/Lines.jpg')] bg-fixed bg-left bg-contain bg-no-repeat w-[400px] h-[580px] shadow-lg hidden md:flex"
        >
          {/* <img className="bg-fixed" src={Lines} alt="" /> */}
        </motion.div>

        <motion.div
          key="description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col items-center justify-start gap-9 w-[500px] md:items-start"
        >
          <p className="text-3xl dark:text-white font-700 leading-snug md:text-left text-center">
            {lang
              ? "Olá meu nome é Lucas, atualmente estou estudando e procurando meu primeiro emprego!"
              : "Hi my name is Lucas, I am currently studying and seeking my first job!"}
          </p>

          <p className="text-lg dark:text-white font-400 leading-snug md:text-left text-center">
            {lang
              ? "Atualmente, estou estudando desenvolvimento full stack com foco em TypeScript, Node.js e MySQL, mas também tenho uma boa familiaridade com o desenvolvimento front-end."
              : "I am currently studying full stack development with a focus on TypeScript, Node.js and MySQL, but I also have a good familiarity with front-end development."}
          </p>

          <a href="#work-top" className="px-2 py-2 dark:text-white dark:border-white text-center border border-solid border-black rounded-full w-60 font-bold hover:bg-black hover:bg-opacity-20 hover:scale-95 transition-transform">
            { lang ? "Veja meu trabalho" : "Check my work"}
          </a>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
