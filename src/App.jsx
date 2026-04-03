function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-xl font-bold">Praveen Raj</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Praveen Raj 👋</h2>
        <p className="text-gray-400">DevOps Engineer | Web Developer</p>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I build scalable web apps and automate deployments using CI/CD pipelines.
          Skilled in React, Node.js, Docker, and cloud technologies.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Asset Management System</h3>
            <p className="text-gray-300 mt-2">
              Tracks inventory, employee usage, and stock updates.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">E-commerce Dashboard</h3>
            <p className="text-gray-300 mt-2">
              Analytics for sales and returns with CSV uploads.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Email: praveen@example.com</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-800 text-gray-400">
        © 2026 Praveen Raj
      </footer>

    </div>
  );
}

export default App;