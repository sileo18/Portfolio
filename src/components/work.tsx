interface WorkProps {
  lang: boolean;
}

export default function Work({ lang }: WorkProps) {
  return (
    <div className="flex flex-col dark:text-white justify-center items-center gap-4">
      <p className="text-3xl font-bold">{lang ? "Trabalhos" : "Work"}</p>
      <p className="text-lg font-light">
        {lang
          ? "Veja meus projetos feitos com TypeScript, NodeJS, JavaScript e React"
          : "Check my projects made with TypeScript, NodeJS, JavaScript and React"}
      </p>
    </div>
  );
}
