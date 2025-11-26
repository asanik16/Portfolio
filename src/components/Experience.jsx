import { useSelector } from 'react-redux';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const { mode } = useSelector((state) => state.theme);

  const experiences = [
    {
      company: 'Kinetik',
      role: 'Software Engineer III',
      duration: 'Jan 2026 - Present',
      description: 'Leading development of cloud-based solutions and mentoring junior developers.',
      achievements: [
        'Architected and implemented microservices infrastructure serving 1M+ users',
        'Reduced API response time by 60% through optimization and caching strategies',
        'Mentored 5 junior developers and conducted technical workshops',
      ],
    },
    {
      company: 'Kinetik',
      role: 'Software Engineer II',
      duration: 'Feb 2025 - Dec 2025',
      description: 'Developed and maintained multiple web applications using modern frameworks.',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Collaborated with cross-functional teams to deliver projects on time',
      ],
    },
    {
      company: 'Kinetik',
      role: 'Software Engineer I',
      duration: 'Jun 2023 - Feb 2025',
      description: 'Contributed to various projects and learned modern development practices.',
      achievements: [
        'Developed RESTful APIs and integrated third-party services',
        'Participated in code reviews and agile development processes',
        'Improved application performance and user experience',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey and career highlights
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          ></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } animate-fadeInUp`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-[var(--color-dark-bg)] md:border-[var(--color-dark-bg)] z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0`}>
                  <div className="glass rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <FiBriefcase className="w-5 h-5 text-indigo-500" />
                      <h3 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {exp.role}
                      </h3>
                    </div>
                    
                    <h4 className="text-xl text-indigo-500 font-semibold mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <FiCalendar className="w-4 h-4" />
                      <span className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {exp.duration}
                      </span>
                    </div>

                    <p className={`mb-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 md:text-left`}>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
