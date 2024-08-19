import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Ensure to import Hero if it's in a separate file
import About from './components/About'; // Corrected import path
import Technologies from './components/Technologies'; 
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className='container mx-auto px-9'>
        <Navbar />
        <Hero /> 
        <About />
        <Technologies />
       
        < Projects />
        < Experience />
        < Contact />
      </div>   
    </div>
  );
}

export default App;
