import { useState } from 'react';

function Contactpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been submitted.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-100">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Get In Touch</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          I'm open to junior frontend roles, freelance projects, and collaborations. Feel free to send a message!
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Contact Details</h2>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                <p className="font-medium text-lg">Sindh, Pakistan</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                <a 
                  href="mailto:example@gmail.com" 
                  className="font-medium text-lg text-blue-400 hover:underline"
                >
                  abdulghaffar.dev@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Box */}
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Connect With Me</h2>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Your Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                placeholder="Abdul Ghaffar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Your Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                placeholder="Project Inquiry / Job Opportunity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contactpage;