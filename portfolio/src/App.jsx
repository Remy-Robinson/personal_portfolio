import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {Suspense, lazy} from 'react';
import LoadingIcon from "./components/Loading.jsx";
import Particles from "./components/Background.jsx";
import './index.css'
import './App.css'


const NavBar = lazy(() => import('./components/NavBar.jsx'));

export default function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <Particles />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingIcon />
            </div>
          }
        >
          <NavBar />
        </Suspense>
      </div>
    </div>
  );
}

