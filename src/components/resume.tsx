import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ResumeProps {
  lang: boolean;
}

export default function Resume({ lang }: ResumeProps) {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 dark:text-white"
        >
          <p className="text-3xl font-bold">{lang ? "Currículo" : "Resume"}</p>
          <p className="text-base font-light max-w-[800px]">
            {lang
              ? "Atualmente, estou estudando e procurando meu primeiro emprego. Estou me dedicando aos estudos de desenvolvimento full stack, com foco em TypeScript e Node.js, mas também possuo boa familiaridade com o desenvolvimento front-end. Estou comprometido(a) em aprimorar minhas habilidades e adquirir experiência prática na área de desenvolvimento de software."
              : "I am currently studying and seeking my first job. I am currently studying fullstack development with a focus on TypeScript and Node.js, but I also have a good familiarity with front-end development. I am committed to improving my skills and gaining practical experience in the software development field."}
          </p>
        </motion.div>
      )}
    </InView>
  );
}
