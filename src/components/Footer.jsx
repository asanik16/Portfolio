import { useSelector } from 'react-redux';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { socialLinks } from '../constants';

const Footer = () => {
  const { mode } = useSelector((state) => state.theme);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display text-gradient mb-4">Portfolio</h3>
            <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              Software Engineer & Aspiring Researcher building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`hover:text-indigo-500 transition-colors ${
                      mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Connect With Me
            </h4>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              {/* <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a> */}
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t border-default flex flex-col md:flex-row justify-between items-center gap-4 ${
          mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <p>© 2025 Portfolio. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
