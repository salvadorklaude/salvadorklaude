import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const toggleTheme = () => setLightMode(!lightMode);

  return (
    <div className={lightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
      <Navbar lightMode={lightMode} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer lightMode={lightMode} />
    </div>
  );
}

export default App;
