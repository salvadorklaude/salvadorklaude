import { useState } from 'react';
import { BsLightbulb, BsLightbulbFill, BsBoxArrowUpRight } from 'react-icons/bs';
import './App.css';

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => setLightMode(!lightMode);

  return (
    <div className={lightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
      <nav className={`w-full py-4 px-8 flex justify-between items-center ${lightMode ? 'bg-white' : 'bg-gray-800'}`}>
        <h1 className="text-xl font-bold">salvadorklaude</h1>
        <ul className="flex items-center gap-6">
          <li><a href="#bio">About</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={toggleTheme} className={`p-2 rounded-full border ${lightMode ? 'border-black' : 'border-white'}`}>
              {lightMode ? <BsLightbulbFill className="text-black" /> : <BsLightbulb />}
            </button>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold">@salvadorklaude</h1>
          <p className="text-sm">Programs Intern @ FEU Tech Innovation Center</p>
        </header>

        <section id="bio" className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <img src="/img/klod.jpg" alt="My Picture" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
          <p className="max-w-xl mx-auto">
            I am a 22-year-old technology enthusiast currently studying at Far Eastern Institute of Technology, driven by a passion for information technology. Born and raised in Meycauayan, Bulacan, I spent part of my early education overseas. Known for strong communication skills and teamwork, I am committed to making a positive impact in the tech field.
          </p>
          <a
            href="/files/Klaude_Salvador.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <BsBoxArrowUpRight className="mr-2" /> View My Resume
          </a>
        </section>

        <section id="certifications" className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Example cert - repeat as needed */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform">
              <h4 className="font-bold">IT Specialist - Databases</h4>
              <p>Issued by Certiport</p>
              <a href="https://www.credly.com/badges/1bac404f-6115-4199-a1f9-aebc8190955b/public_url" className="inline-block mt-2 text-yellow-400 hover:underline">View Credential</a>
            </div>
            {/* Add more certification cards here */}
          </div>
        </section>

        <section id="skills" className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example icons */}
            <img src="/img/css_logo-removebg-preview.png" alt="CSS" className="w-16 hover:scale-110 transition" />
            <img src="/img/JS-removebg-preview.png" alt="JavaScript" className="w-16 hover:scale-110 transition" />
            {/* Add more as needed */}
          </div>
        </section>

        <section id="projects" className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-6">Previous Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <img src="/img/seamac2.png" alt="CourseForge" className="w-full rounded mb-4" />
              <h3 className="text-xl font-bold">CourseForge</h3>
              <p>Used by: SEAMAC International Training Institute</p>
              <ul className="list-disc list-inside text-left max-w-xl mx-auto">
                <li>Role: Back-end Developer</li>
                <li>Features: Dark Mode, Responsive Layout, Recommender System</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <img src="/img/Feathers.jpg" alt="Feathers Portal" className="w-full rounded mb-4" />
              <h3 className="text-xl font-bold">Feathers Portal</h3>
              <ul className="list-disc list-inside text-left max-w-xl mx-auto">
                <li>Role: Full-Stack Developer</li>
                <li>Features: Donation System, Mobile Responsive UI, User-friendly features</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: klodsalvador@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/salvadorklaude" className="text-blue-400 hover:underline">salvadorklaude</a></p>
          <p>Phone: +63 999 489 6376</p>
        </section>
      </div>

      <footer className={`text-center py-4 ${lightMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
        <p>&copy; 2025 salvadorklaude | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
