import { useSelector } from 'react-redux';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const { mode } = useSelector((state) => state.theme);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fadeInUp">
          {/* Avatar placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-xl">
              CS
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            <span className={mode === 'dark' ? 'text-white' : 'text-gray-900'}>
              Hi, I'm a{' '}
            </span>
            <span className="text-gradient">
              Software Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            & Aspiring Computer Science Researcher
          </p>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Passionate about building innovative solutions and exploring the frontiers of
            computer science through research and development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 hover:shadow-glow transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 hover:shadow-glow transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 glass rounded-full hover:scale-110 hover:shadow-glow transition-all duration-300"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-block p-2 rounded-full glass"
            aria-label="Scroll to about section"
          >
            <FiArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
