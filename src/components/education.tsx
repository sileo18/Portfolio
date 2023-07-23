import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface EducationProps {
  lang: boolean;
}

export default function Education({ lang }: EducationProps) {
  return (
    <InView>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 items-center"
        >
          <div className="bg-black w-[140x]">
            <p className="text-2xl font-bold px-2 w-[140px] text-white">
              {lang ? "Educação" : "Education"}
            </p>
          </div>
          <div className="flex flex-col gap-2 dark:text-white">
            <div>
              <p className="font-semibold text-xl">
                {" "}
                {lang
                  ? "Desenvolvimento de Sistemas"
                  : "Systems Development Technician"}
              </p>
              <p>Senac EAD {"\n"} 2023 - 2025</p>
            </div>

            <div>
              <p className="font-semibold text-xl">
                {lang ? "Ensino Médio" : "High School"}
              </p>
              <p>Colégio San Marino {"\n"} 2019 - 2021</p>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
}
