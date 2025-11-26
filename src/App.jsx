import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${mode}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
