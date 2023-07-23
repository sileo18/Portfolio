"use client";
import { ProjectsAll } from "./CompoentsProjetcs/projectsAll";
import TodoList from "../assets/TodoList.png";
import GitMarket from "../assets/gitMarket.png";
import Books from "../assets/Fall Reading List.jpg"

interface ProjectProps {
  lang: boolean;
}

export default function Projects({ lang }: ProjectProps) {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12">
        <ProjectsAll
          src={TodoList}
          alt="Imagem projeto lista de afazeres"
          link="https://github.com/sileo18/TodoList"
          content={
            lang              
              ? "Aplicativo de lista de tarefas usando React. Ele permite aos usuários criar, visualizar, e excluir tarefas. Além disso também tem o recurso como marcação de tarefas como concluídas e pesquisa pelo nome"
              : "Task list application using React. It allows users to create, view, and delete tasks. Additionally, it also features task completion marking and searching by name."
          }
        />

        <ProjectsAll
          src={GitMarket}
          alt="Imagem projeto app mobile de versionamento de listas"
          link="https://github.com/sileo18/GitMarket"
          content={
            lang              
              ? "GitMarket é um software que está em desenvolvimento utilizando ReactNative, TypeScript, SQLite e NodeJS. O objetivo central do aplicativo é basicamentepossibilitar o versionamento de listas de mercado"
              : "GitMarket is a software under development using ReactNative, TypeScript, SQLite, and NodeJS. The main objective of the application is essentially to enable versioning of shopping lists."
          }
        />

        <ProjectsAll
          src={Books}
          alt="Imagem projeto app mobile de versionamento de listas"
          link="https://github.com/sileo18/GitMarket"
          content={
            lang             
              ? "Sistema de gerenciamento de livros utilizando Node.js e SQLite. O sistema permiti o cadastro, visualização, edição e exclusão de livros. Além disso, a autenticação de usuários é feita usando tokens JWT. "
              : "Book management system using Node.js and SQLite. The system allows the registration, viewing, editing, and deletion of books. Additionally, user authentication is done using JWT tokens."
          }
        />

       
      </div>
    </>
  );
}
