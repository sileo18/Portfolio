"use client";
import { ProjectsAll } from "./CompoentsProjetcs/projectsAll"
import TodoList from "../assets/TodoList.png"
import GitMarket  from "../assets/gitMarket.png"

export default function Projects() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12">
        <ProjectsAll
          src={TodoList}
          alt="Imagem projeto lista de afazeres"
          link="https://github.com/sileo18/TodoList"
          content="Aplicativo de lista de tarefas usando React. Ele permite 
          aos usuários criar, visualizar, e excluir tarefas. Além disso também tem o 
          recurso como marcação de tarefas como concluídas e pesquisa pelo nome"
        />

        <ProjectsAll
          src={GitMarket}
          alt="Imagem projeto app mobile de versionamento de listas"
          link="https://github.com/sileo18/GitMarket"
          content="GitMarket é um software que está em desenvolvimento utilizando 
          ReactNative, TypeScript, SQLite e NodeJS. O objetivo central do aplicativo é 
          basicamentepossibilitar o versionamento de listas de mercado
          "
        />

        <ProjectsAll
          src={GitMarket}
          alt="Imagem projeto app mobile de versionamento de listas"
          link="https://github.com/sileo18/GitMarket"
          content="Sistema de gerenciamento de livros utilizando Node.js e SQLite.
           O sistema permiti o cadastro, visualização, edição e exclusão de livros.
           Além disso, a autenticação de usuários é feita usando tokens JWT. "
        />
 
 <div className="w-80 h-1 bg-black absolute flex items-center justify-center right-[350px] top-1/2 z-0">
  <div className="rounded-full h-6 w-6 bg-black"></div>
 </div>
      </div>
    </>
  );
}
