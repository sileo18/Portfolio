import saveAs from "file-saver";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { InView } from "react-intersection-observer";

interface DownloadProps {
  lang: boolean;
}

export default function Download({ lang }: DownloadProps) {
  const downloadFile = () => {
    const fileContent = "../assets/gitMartket.png";
    const fileType = "png";
    const blob = new Blob([fileContent], { type: fileType });
    saveAs(blob, "gitMarket.png");
  };

  return (
    <InView>
      {({ ref, inView }) => (
        <motion.button
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={downloadFile}
          className="flex gap-2 items-center border border-solid border-black rounded-lg px-2 py-2 dark:border-white dark:text-white dark:hover:bg-slate-200 dark:hover:bg-opacity-30 hover:bg-gray-200 transition-colors"
        >
          <BsDownload />
          {lang ? "Baixe meu currículo" : "Download my resume"}
        </motion.button>
      )}
    </InView>
  );
}
