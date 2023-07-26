"use client";
import { ProjectsAll } from "./CompoentsProjetcs/projectsAll" ;
import Widget from "/assets/Widget.png";
import GitMarket from "/assets/gitMarket.png";
import Books from "/assets/Fall Reading List.jpg"

interface ProjectProps {
  lang: boolean;
}

export default function Projects({ lang }: ProjectProps) {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12">
        <ProjectsAll
          src={Widget}
          alt="Widget"
          link="https://github.com/sileo18/weather-widget"
          content={
            lang              
              ? "Uma widget feita usando React que exibe informações climáticas. Ela permite que o usuário insira o nome da cidade desejada para visualizar a descrição do clima, a temperatura em Fahrenheit (°F) e Celsius (°C)"
              : "A React widget that displays weather information for a specific city. It allows users to enter the desired city name to view the weather description, temperature in Fahrenheit (°F), and Celsius (°C)"
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
          link="https://github.com/sileo18/Library"
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
