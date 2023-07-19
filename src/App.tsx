"use client";
import './App.css'
import Header from "./components/header";
import Main from "./components/main";
import Projects from "./components/projects";
import Education from "./components/education";
import Technologies from "./components/technologies";
import Download from "./components/download";
import Resume from "./components/resume";


function App() { 

  return (
    <main className="flex flex-col justify-center bg-white min-h-screen relative overflow-x-hidden">
      {/* Welcome Page */}
      <div className="flex flex-col min-w-full min-h-screen ">
        {/*Header */}
        <Header />

        {/*Main */}
        <Main />
      </div>

      {/*Work Page*/}
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full gap-8">
        <div id="work-top" className="aria-hidden:" />

        {/*Title Work */}
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl font-bold">Work</p>
          <p className="text-lg font-light">
            Check my projects made with TypeScript, NodeJS, JavaScript, React.
          </p>
        </div>

        {/*Projects GRID */}
        <Projects />
      </div>

      <div className="flex flex-col items-center text-center py-4 gap-8">
        <div id="resume-top" className="aria-hidden: relative" />

        {/*Resume */}
        <Resume />

        {/*Education */}
        <Education />
        
        {/*Technologies */}
        <Technologies />

        {/*Download*/}
        <Download />

        <div className="w-3 h-[500px] bg-black absolute left-44 bottom-0 lg:flex sm:hidden"></div>

        <div className="w-3 h-[300px] bg-black absolute left-56 bottom-0 lg:flex sm:hidden"></div>

        <div className="w-3 h-[350px] bg-black absolute right-48 bottom-0 lg:flex sm:hidden"></div>
      </div>
    </main>
  )
}

export default App
