import { useSelector } from 'react-redux';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { mode } = useSelector((state) => state.theme);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'AI Research Tool',
      description: 'Machine learning application for analyzing research papers using NLP techniques and providing insights.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=AI+Research',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with real-time messaging, rooms, and user presence indicators.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Chat+App',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with team features, deadline tracking, and progress visualization.',
      tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Task+Manager',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with custom charts and real-time updates.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Dashboard',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices API gateway with rate limiting, authentication, and load balancing capabilities.',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=API+Gateway',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${
                        mode === 'dark'
                          ? 'bg-indigo-900/30 text-indigo-300'
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-all ${
                      mode === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
