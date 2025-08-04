export default function Footer({ lightMode }) {
    return (
      <footer className={`text-center py-4 ${lightMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
        <p>&copy; 2025 salvadorklaude | All rights reserved | Created using React.js and tailwindcss</p>
      </footer>
    );
  }