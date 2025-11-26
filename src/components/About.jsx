import { useSelector } from 'react-redux';
import { FiCode, FiHeart, FiBookOpen } from 'react-icons/fi';

const About = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know more about who I am and what I do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="animate-slideInLeft">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Software Engineer & Researcher
              </h3>
              <p className={`text-lg mb-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate software engineer with a strong interest in pursuing a PhD in
                Computer Science. I love building elegant solutions to complex problems and
                exploring new technologies.
              </p>
              <p className={`text-lg mb-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                My journey in tech has been driven by curiosity and a desire to make a meaningful
                impact through innovation. I'm particularly interested in advancing the field
                through research and contributing to cutting-edge developments.
              </p>
              <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding or doing research, you can find me exploring new technologies,
                contributing to open-source projects, or diving deep into academic papers.
              </p>
            </div>
          </div>

          {/* Right side - Interest cards */}
          <div className="animate-slideInRight space-y-6">
            <div className="glass rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FiCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Software Development
                  </h4>
                  <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Building scalable applications with modern technologies and best practices.
                    Focus on clean code, performance, and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FiBookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Research & Academia
                  </h4>
                  <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Aspiring to pursue a PhD in Computer Science to contribute to advancing
                    the field through innovative research and discoveries.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Continuous Learning
                  </h4>
                  <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Passionate about staying updated with the latest technologies, frameworks,
                    and research in computer science and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
