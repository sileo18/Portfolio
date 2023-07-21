import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeaderProps {
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
  transition: boolean,
  setTransition:  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ lang, setLang, transition, setTransition }: HeaderProps) {
  const toogleLang = () => {
    setLang(!lang);
  };

  const toogleTransition = () => {
    setTransition(false)

    const timer = setTimeout(() => {
      setTransition(true);
    }, 500);
    
  }  

  return (
    <header className="flex w-full px-24 bg-white shadow-xl justify-between items-center py-8 md:flex-row sm:flex-col sm:gap-8 sm:relative md:fixed z-20">
      <div className="flex gap-4 items-center">
        <FaLanguage
          size={30}
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => {
            toogleLang();
            toogleTransition();
          }}
        />
      </div>

      <div className="text-black flex gap-6 text-center md:flex-row sm:flex-col">
        <a
          href="#work-top"
          className="text-xl font-medium hover:scale-105 transition-transform cursor-pointer"
        >
          <motion.div    
        initial={{ opacity: 1}}
        animate={transition ? { opacity: 1 } : { opacity: 0 } }
        transition={{ duration: 0.5 }}>{lang ? "Trabalhos" : "Work"}</motion.div>
        </a>
        <a
          href="#resume-top"
          className="text-xl font-medium hover:scale-105 transition-transform cursor-pointer"
        >
          {lang ? "Currículo" : "Resume"}
        </a>
        <a className="text-xl font-medium hover:scale-105 transition-transform cursor-pointer">
          {lang ? "Contato" : "Contact"}
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <a target="_blank" href="https://github.com/sileo18">
          <FiGithub
            className="cursor-pointer  hover:scale-105 transition-transform"
            size={26}
            color="#000000"
          />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/lucas-antonio-toledo-sileo-b42593237/"
        >
        <SlSocialLinkedin
          className="cursor-pointer hover:scale-105 transition-transform"
          size={26}
          color="#000000"
        />
        </a>
      </div>
    </header>
  );
}
