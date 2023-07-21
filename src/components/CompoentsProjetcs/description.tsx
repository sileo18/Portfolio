import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface DescriptionProjectsProps {  
  content: string,
  
}

export function Description({ content }: DescriptionProjectsProps) {
  // const [ref, inView] = useInView({
  //   triggerOnce: true, //A animação será disparada apenas uma vez
  //   threshold: 0.1, // Proporção do elemento visível para animação iniciar (10%)
  // });

  return (
    <InView threshold={0.25}>
    {({ ref, inView }) => (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="w-80 h-[175px] flex flex-col justify-center"
      >
        <p className="text-center leading-relaxed text-lg" content={content}>{content}</p>
      </motion.div>
    )}
  </InView>
  );
}
