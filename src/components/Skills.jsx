import { useSelector } from 'react-redux';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiFastapi,
  SiKubernetes,
  SiTensorflow,
} from 'react-icons/si';

const Skills = () => {
  const { mode } = useSelector((state) => state.theme);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'SQL', icon: FaDatabase, color: '#CC2927' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with and love
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="glass rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent
                          className="w-8 h-8 group-hover:scale-110 transition-transform"
                          style={{ color: skill.color }}
                        />
                        <span className={`font-medium ${mode === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
