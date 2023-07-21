import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface TechnologiesProps {
  lang: boolean;
}

export default function Technologies({ lang }: TechnologiesProps) {
  return (
    <InView>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <p className="text-2xl font-bold bg-black px-2 text-white">
            {lang ? "Tecnologias" : "Technologies"}
          </p>
          <div>
            <p className="text-base font-medium">TypeScript</p>
            <p className="text-base font-medium">React</p>
            <p className="text-base font-medium">NodeJS</p>
            <p className="text-base font-medium">CSS</p>
          </div>
        </motion.div>
      )}
    </InView>
  );
}
