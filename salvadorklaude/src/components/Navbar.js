import { BsLightbulb, BsLightbulbFill } from 'react-icons/bs';

export default function Navbar({ lightMode, toggleTheme }) {
  return (
    <nav className={`w-full py-4 px-8 flex justify-between items-center ${lightMode ? 'bg-white' : 'bg-gray-800'}`}>
      <h1 className="text-xl font-bold">salvadorklaude</h1>
      <ul className="flex items-center gap-6">
        <li><a href="#bio">About</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${lightMode ? 'border-black' : 'border-white'}`}>
            {lightMode ? <BsLightbulbFill className="text-black" /> : <BsLightbulb />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
