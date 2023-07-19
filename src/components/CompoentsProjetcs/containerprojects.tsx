import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface ContainerProjectsProps {
  src: string;
  alt: string;
}

export function ContainerProjects({ src, alt }: ContainerProjectsProps) {
  

  return (
    <InView threshold={0.25}>
    {({ ref, inView }) => (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="w-80 h-auto flex items-center justify-center z-10"
      >
        <img className="h-80 object-contain hover:scale-105 transition-transform rounded-2xl " src={src} alt={alt}></img>
        
      </motion.div>
    )}
  </InView>
  );
}
