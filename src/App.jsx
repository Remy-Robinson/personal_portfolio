import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
import LoadingIcon from "./components/Loading.jsx";
import Particles from "./components/Background.jsx";
import HeroSection from "./pages/heroSection.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import ProjectsSection from "./components/Projects.jsx";
import './index.css';
import './App.css';


const NavBar = lazy(() => import('./components/NavBar.jsx'));

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Apply the class to the HTML element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);


  return (
    <div className={`min-h-screen flex justify-center items-center ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="relative z-10 w-full">
        <Suspense fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingIcon pulse/>
            </div>
          }
        >
          <div className = "relative z-0 w-full pointer-events-none">
            <Particles isDark={isDark} />
          </div>
          <div className="relative z-10">
            <HeroSection isDark={isDark} setIsDark={setIsDark} />
          </div>
          <div className="relative z-10">
            <NavBar isDark={isDark} setIsDark={setIsDark} />
          </div>
          <div className="relative z-5">
            <About isDark={isDark} setIsDark={setIsDark} />
          </div>

          <div className="relative z-5">
            <Experience isDark={isDark} setIsDark={setIsDark} />
          </div>

          <div className = "relative z-5">
            <ProjectsSection isDark = {isDark} setIsDark={setIsDark}/>
          </div>
        </Suspense>
      </div>
    </div>
  );
}