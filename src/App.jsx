import { useState, useEffect, useRef } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Simple scroll reveal using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased overflow-x-hidden">
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');
          body { font-family: 'Inter', sans-serif; }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .reveal-on-scroll {
            transition: all 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
        `}
      </style>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-10 py-4 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300">
          Praveen Raj
        </h1>
        <nav className="hidden md:flex space-x-8 text-sm md:text-base font-medium">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all hover:after:w-full">Contact</a>
        </nav>
        {/* Mobile menu button - simple for demo */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto reveal-on-scroll opacity-0 translate-y-10">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100 shadow-sm animate-pulse">
            ✨ Welcome to my creative space
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">Praveen Raj</span> 👋
          </h2>
          <p className="text-gray-500 text-lg md:text-2xl max-w-3xl mx-auto mb-8">
            DevOps Engineer | Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-sm font-semibold shadow-lg shadow-indigo-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 rounded-full text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto reveal-on-scroll opacity-0 translate-y-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 text-center leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
            I build scalable web apps and automate deployments using CI/CD pipelines.
            Skilled in React, Node.js, Docker, and cloud technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-gray-50/80 reveal-on-scroll opacity-0 translate-y-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "bg-cyan-100 text-cyan-700" },
              { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-700" },
              { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-700" },
              { name: "Kubernetes", icon: "☸️", color: "bg-indigo-100 text-indigo-700" },
              { name: "AWS", icon: "☁️", color: "bg-yellow-100 text-yellow-700" },
              { name: "Tailwind", icon: "🎨", color: "bg-teal-100 text-teal-700" },
              { name: "Git", icon: "📦", color: "bg-orange-100 text-orange-700" },
              { name: "Jenkins", icon: "🔧", color: "bg-red-100 text-red-700" },
            ].map((skill, idx) => (
              <div key={idx} className={`flex flex-col items-center p-4 rounded-2xl ${skill.color} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                <span className="text-4xl mb-2">{skill.icon}</span>
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 reveal-on-scroll opacity-0 translate-y-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:h-3 transition-all duration-300"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Asset Management System
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Tracks inventory, employee usage, and stock updates with real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">React</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">Node.js</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">MongoDB</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">Redis</span>
                </div>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">Live Demo →</a>
                  <a href="#" className="text-gray-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">GitHub →</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:h-3 transition-all duration-300"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    E-commerce Dashboard
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Analytics for sales and returns with CSV uploads and interactive charts.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">Next.js</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">Tailwind</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">Chart.js</span>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">PostgreSQL</span>
                </div>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">Live Demo →</a>
                  <a href="#" className="text-gray-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">GitHub →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 max-w-5xl mx-auto reveal-on-scroll opacity-0 translate-y-10">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-indigo-50/50 p-4 rounded-xl">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:praveen@example.com" className="text-indigo-600 font-medium hover:underline">praveen@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-purple-50/50 p-4 rounded-xl">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">Remote / India</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zm6.162 4.613c-2.548 0-4.613-2.065-4.613-4.613s2.065-4.613 4.613-4.613 4.613 2.065 4.613 4.613-2.065 4.613-4.613 4.613zm6.816-8.476c0 .895-.725 1.62-1.62 1.62-.895 0-1.62-.725-1.62-1.62 0-.895.725-1.62 1.62-1.62.895 0 1.62.725 1.62 1.62z"/></svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 outline-none transition" />
              <textarea rows="3" placeholder="Your message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 outline-none transition"></textarea>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white border-t border-gray-100 text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© 2026 Praveen Raj. Crafted with ☕ and modern web tools.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 focus:outline-none z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}
    </div>
  );
}

export default App;