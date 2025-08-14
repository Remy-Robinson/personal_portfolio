import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import React, { Suspense, lazy } from 'react';
import LoadingIcon from "./components/Loading.jsx";
import Particles from "./components/Background.jsx";
import './index.css';
import './App.css';

const NavBar = lazy(() => import('./components/NavBar.jsx'));

export default function App() {
  const [isDark, setIsDark] = useState(true);

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
      <Particles isDark={isDark} />
      <div className="relative z-10 w-full">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingIcon />
            </div>
          }
        >
          <NavBar isDark={isDark} setIsDark={setIsDark} />
        </Suspense>
      </div>
    </div>
  );
}