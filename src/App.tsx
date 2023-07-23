"use client";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Projects from "./components/projects";
import Education from "./components/education";
import Technologies from "./components/technologies";
import Download from "./components/download";
import Resume from "./components/resume";
import { useState } from "react";
import Work from "./components/work";


function App() {

  const [lang, setLang] = useState(false)

  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-800 min-h-screen relative overflow-x-hidden">
      {/* Welcome Page */}
      <div className="flex flex-col min-w-full min-h-screen ">
        {/*Header */}
        <Header lang={lang} setLang={setLang} />       

        {/*Main */}
        <Main lang={lang} />
      </div>

      {/*Work Page*/}
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full gap-8">
        <div id="work-top" className="aria-hidden:" />

        {/*Title Work */}
        <Work lang={lang}/>

        {/*Projects GRID */}
        <Projects lang={lang} />
      </div>

      <div className="flex flex-col items-center text-center py-4 gap-8">
        <div id="resume-top" className="aria-hidden: relative" />

        {/*Resume */}
        <Resume lang={lang} />

        {/*Education */}
        <Education lang={lang} />

        {/*Technologies */}
        <Technologies lang={lang} />

        {/*Download*/}
        <Download lang={lang}/>

        <div className="w-3 h-[500px] bg-black dark:bg-white opacity-10 absolute left-44 bottom-0 lg:flex sm:hidden"></div>

        <div className="w-3 h-[300px] bg-black dark:bg-white opacity-10 absolute left-56 bottom-0 lg:flex sm:hidden"></div>

        <div className="w-3 h-[350px] bg-black dark:bg-white opacity-10 absolute right-48 bottom-0 lg:flex sm:hidden"></div>
      </div>
    </main>
  );
}

export default App;
