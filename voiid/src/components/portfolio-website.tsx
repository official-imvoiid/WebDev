export default function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center border-b border-gray-800">
        <div className="text-xl font-bold text-white">VOIID</div>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#work" className="text-gray-300 hover:text-white">Work</a>
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#resume" className="text-gray-300 hover:text-white">Resume</a>
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">
            GET IN TOUCH
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Hero Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-full mb-4"></div>
            <h1 className="text-2xl font-bold mb-2">Hey, I'm Voiid 👋</h1>
            <p className="text-gray-400">"A Developer & CyberSecurity Student"</p>
          </div>

          {/* Resume Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="text-sm text-gray-400 mb-2">LEARN MORE ABOUT ME</div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">See my resume</h2>
              <div className="text-gray-400">→</div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="text-sm mb-2">Recent</div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Achievements</h2>
              <div className="text-gray-400">→</div>
            </div>
          </div>

          {/* Papers Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="text-sm mb-2">My Papers</div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Research</h2>
              <div className="text-gray-400">→</div>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-center items-center h-full">
              <div className="text-4xl text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="text-sm text-gray-400 mb-2">BRANDING</div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">About Voiid</h2>
              <div className="text-gray-400">→</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <h2 className="text-xl mb-2">Collaborate together!</h2>
            <div className="text-yellow-500 text-xl font-medium">Get in touch now</div>
          </div>

          {/* What I Do Section */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
            <div className="text-sm text-gray-400 mb-4">WHAT I DO</div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl text-yellow-500 mb-2">&lt;/&gt;</div>
                <div>Develop</div>
              </div>
              <div>
                <div className="text-2xl text-yellow-500 mb-2">📚</div>
                <div>Literature</div>
              </div>
              <div>
                <div className="text-2xl text-yellow-500 mb-2">📦</div>
                <div>3D & Editing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center py-8">
          <h2 className="text-xl font-medium">"BE A CHANGE OF BEGINNING"</h2>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 text-center border-t border-gray-800">
        <div className="text-xl font-bold mb-4">VOIID</div>
        <nav className="mb-4 space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#resume" className="text-gray-300 hover:text-white">Resume</a>
        </nav>
        <div className="flex justify-center space-x-4 mb-4 text-gray-400">
          <a href="#" className="hover:text-white">in</a>
          <a href="#" className="hover:text-white">tw</a>
          <a href="#" className="hover:text-white">dc</a>
          <a href="#" className="hover:text-white">pi</a>
          <a href="#" className="hover:text-white">rd</a>
          <a href="#" className="hover:text-white">🌐</a>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
