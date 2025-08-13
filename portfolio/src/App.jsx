import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {Suspense} from 'react';
import LoadingIcon from "./components/Loading.jsx";
import ThreeBg from "./components/ThreeBg.jsx";
import './index.css'
import './App.css'


export default function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <ThreeBg />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingIcon />
            </div>
          }
        >
          <LoadingIcon />
        </Suspense>
      </div>
    </div>
  );
}

