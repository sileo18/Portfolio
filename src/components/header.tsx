import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeaderProps {
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const toogleLang = () => {
    setLang(!lang);
  };

  return (
    <header className="flex w-full px-24 bg-white dark:bg-zinc-900 shadow-xl justify-between items-center py-8 md:flex-row sm:flex-col sm:gap-8 sm:relative md:fixed z-20">
      <div className="flex gap-4 items-center">
        <FaLanguage
          size={30}
          className="dark:text-white cursor-pointer hover:scale-105 transition-transform"
          onClick={() => {
            toogleLang();
          }}
        />
      </div>

      <div className="text-black dark:text-white flex gap-6 text-center md:flex-row sm:flex-col">
        <a
          href="#work-top"
          className="text-xl font-medium hover:scale-105 transition-transform cursor-pointer"
        >
          {lang ? "Trabalhos" : "Work"}
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
            className="dark:text-white cursor-pointer  hover:scale-105 transition-transform"
            size={26}
          />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/lucas-antonio-toledo-sileo-b42593237/"
        >
          <SlSocialLinkedin
            className="dark:text-white cursor-pointer hover:scale-105 transition-transform"
            size={26}
          />
        </a>
      </div>
    </header>
  );
}
