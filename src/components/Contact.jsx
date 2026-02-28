import { useSelector } from 'react-redux';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { socialLinks } from '../constants';

const Contact = () => {
  const { mode } = useSelector((state) => state.theme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (this is just a UI, no backend)
    alert('Thank you for your message! (Note: This is a demo form)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's discuss your project or research opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideInLeft">
            <div className="glass rounded-2xl p-8">
              <h3 className={`text-2xl font-bold mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none ${mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <FiSend className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInRight space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className={`text-2xl font-bold mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </h4>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className={`hover:text-indigo-500 transition-colors ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className={`text-2xl font-bold mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all group"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6 group-hover:text-indigo-500 transition-colors" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all group"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6 group-hover:text-indigo-500 transition-colors" />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-lg hover:scale-110 hover:shadow-lg transition-all group"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-6 h-6 group-hover:text-indigo-500 transition-colors" />
                </a> */}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Let's Collaborate
              </h3>
              <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                I'm always open to discussing new projects, creative ideas, research opportunities,
                or partnership possibilities. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
