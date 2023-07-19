import { ButtonGitRepo } from "./button-git";
import { ContainerProjects } from "./containerprojects";
import { Description } from "./description";

interface ProjectsAllProps {
  link: string,
  src: string,
  alt:string
  content: string
}

export function ProjectsAll( {link, src, alt, content }: ProjectsAllProps ) {
  return (
    <div className="flex flex-col gap-4">
      <ContainerProjects
        src={src}
        alt={alt}
      />

      <ButtonGitRepo link={link} />

      <Description content={content} />
    </div>
  );
}
