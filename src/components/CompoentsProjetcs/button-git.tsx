import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { InView } from "react-intersection-observer";

interface ButtonGitRepoProps {
  link: string;
}

export function ButtonGitRepo({ link }: ButtonGitRepoProps) {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 flex justify-center max-h-14 my-auto"
        >
          <a className="cursor-pointer w-full" target="blank" href={link}>
            <button className="px-2 py-2 flex justify-center items-center gap-2 text-center
             border border-solid border-black rounded-full w-full font-bold hover:bg-black
              hover:bg-opacity-20 transition-all">
              Git Repo
              <FiGithub size={26} color="#000000" />
            </button>
          </a>
        </motion.div>
      )}
    </InView>
  );
}
