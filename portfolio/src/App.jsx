import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import React, { Suspense, lazy } from 'react';
import LoadingIcon from "./components/Loading.jsx";
import Particles from "./components/Background.jsx";
import HeroSection from "./components/heroSection.jsx";
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
          <div className = "relative z-0 w-full">
            <Particles isDark={isDark} />
          </div>
          <div className="relative z-10">
            <HeroSection isDark={isDark} setIsDark={setIsDark} />
          </div>
          <div className="relative z-20">
            <NavBar isDark={isDark} setIsDark={setIsDark} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}