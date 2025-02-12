import { useState } from 'react';
import { 
  FaReddit, FaInstagram, FaYoutube, FaDiscord, FaPinterest, 
  FaCode, FaBookOpen, FaCubes, FaBolt 
} from 'react-icons/fa';

const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a 
      href={href}
      className={`text-sm transition-all duration-300 ${isHovered ? 'text-yellow-500 scale-110' : 'text-gray-300'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

const Card = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`bg-zinc-800 rounded-xl p-6 transition-all duration-300
        ${isHovered ? 'transform scale-105 shadow-xl bg-zinc-700' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const MiniCard = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`bg-transparent rounded-xl p-4 transition-all duration-300 ${isHovered ? 'scale-105' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default function Portfolio() {
  const [hoveredBrand, setHoveredBrand] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);

  const socialIcons = [
    { name: 'Reddit', icon: <FaReddit className="hover:scale-125 hover:text-yellow-500 transition-all duration-300" /> },
    { name: 'Instagram', icon: <FaInstagram className="hover:scale-125 hover:text-yellow-500 transition-all duration-300" /> },
    { name: 'YouTube', icon: <FaYoutube className="hover:scale-125 hover:text-yellow-500 transition-all duration-300" /> },
    { name: 'Discord', icon: <FaDiscord className="hover:scale-125 hover:text-yellow-500 transition-all duration-300" /> },
    { name: 'Pinterest', icon: <FaPinterest className="hover:scale-125 hover:text-yellow-500 transition-all duration-300" /> },
  ];

  const whatIDo = [
    { 
      label: 'Develop', 
      icon: (
        <FaCode className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]" />
      ) 
    },
    { 
      label: 'Literature', 
      icon: (
        <FaBookOpen className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]" />
      ) 
    },
    { 
      label: '3D & Editing', 
      icon: (
        <FaCubes className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]" />
      ) 
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <header className="max-w-5xl mx-auto p-6 flex justify-between items-center">
        <div 
          className={`font-bold text-xl transition-all duration-300 ${hoveredBrand ? 'text-yellow-500 scale-110' : ''}`}
          onMouseEnter={() => setHoveredBrand(true)}
          onMouseLeave={() => setHoveredBrand(false)}
        >
          VOIID
        </div>
        <nav className="flex items-center gap-6">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#resume">Resume</NavLink>
          <button 
            className={`text-sm px-4 py-2 rounded-full transition-all duration-300 
              ${hoveredButton ? 'bg-yellow-500 text-white scale-105' : 'bg-white text-black'}`}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            GET IN TOUCH
          </button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-1 group">
            <img 
              src="/api/placeholder/48/48" 
              alt="Profile" 
              className="rounded-full mb-4 transition-transform duration-300 group-hover:scale-110" 
            />
            <h1 className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover:text-yellow-500">
              Hey, I'm Voiid 👋
            </h1>
            <p className="text-gray-400 transition-all duration-300 group-hover:text-white">
              "A Developer & CyberSecurity Student"
            </p>
          </Card>

          <Card className="col-span-1 group">
            <div className="text-sm text-gray-400 mb-2 transition-all duration-300 group-hover:text-yellow-500">
              LEARN MORE ABOUT ME
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl transition-all duration-300 group-hover:text-yellow-500">
                See my resume
              </div>
              <span className="transform transition-all duration-300 group-hover:scale-125 group-hover:translate-x-2 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                →
              </span>
            </div>
          </Card>

          <Card className="col-span-1 group">
            <div className="text-sm text-gray-400 mb-2 transition-all duration-300 group-hover:text-yellow-500">
              Recent
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl transition-all duration-300 group-hover:text-yellow-500">
                Achievements
              </div>
              <span className="transform transition-all duration-300 group-hover:scale-125 group-hover:translate-x-2 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                →
              </span>
            </div>
          </Card>

          <Card className="col-span-1 group">
            <div className="text-sm text-gray-400 mb-2 transition-all duration-300 group-hover:text-yellow-500">
              My Papers
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl transition-all duration-300 group-hover:text-yellow-500">
                Research
              </div>
              <span className="transform transition-all duration-300 group-hover:scale-125 group-hover:translate-x-2 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                →
              </span>
            </div>
          </Card>

          <Card className="col-span-1 group">
            <div className="text-yellow-500 w-16 h-16 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 mx-auto">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </Card>

          <Card className="col-span-1 group">
            <div className="text-sm text-gray-400 mb-2 transition-all duration-300 group-hover:text-yellow-500">
              BRANDING
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl transition-all duration-300 group-hover:text-yellow-500">
                About Voiid
              </div>
              <span className="transform transition-all duration-300 group-hover:scale-125 group-hover:translate-x-2 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                →
              </span>
            </div>
          </Card>

          <Card className="col-span-2 group">
            <h2 className="text-xl mb-2 transition-all duration-300 group-hover:text-yellow-500">
              Collaborate together!
            </h2>
            <div className="text-yellow-500 text-xl transition-all duration-300 group-hover:scale-105">
              Get in touch now
            </div>
          </Card>

          <Card className="col-span-1">
            <div className="text-sm text-gray-400 mb-6">WHAT I DO</div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {whatIDo.map(({ label, icon }) => (
                <MiniCard key={label} className="group">
                  <div className="mb-2">
                    {icon}
                  </div>
                  <div className="text-sm text-center transition-all duration-300">
                    {label}
                  </div>
                </MiniCard>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center py-12">
          <h2 className="text-3xl font-medium transition-all duration-300 group-hover:text-yellow-500">
            "BE A CHANGE OF BEGINNING"
          </h2>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto p-8 text-center">
        <div 
          className="text-xl font-bold mb-6 transition-all duration-300 hover:text-yellow-500 hover:scale-110"
          onMouseEnter={() => setHoveredBrand(true)}
          onMouseLeave={() => setHoveredBrand(false)}
        >
          VOIID
        </div>
        <nav className="mb-6 flex justify-center gap-6">
          {['Home', 'Portfolio', 'About', 'Resume'].map(item => (
            <NavLink key={item} href={`#${item.toLowerCase()}`}>{item}</NavLink>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mb-6">
          {socialIcons.map(({ name, icon }) => (
            <a 
              key={name} 
              href="#" 
              className="group text-2xl transition-all duration-300 hover:scale-125 hover:text-yellow-500"
            >
              {icon}
            </a>
          ))}
          <a 
            href="#" 
            className="group text-2xl text-gray-400 transition-all duration-300 hover:scale-125 hover:text-yellow-500"
          >
            <FaBolt />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
