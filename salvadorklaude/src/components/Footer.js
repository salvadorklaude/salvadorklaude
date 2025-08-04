import { motion } from 'framer-motion';

export default function Footer({ lightMode }) {
  return (
    <motion.footer
      className={`text-center py-4 ${lightMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <p>
        &copy; 2025 salvadorklaude | All rights reserved | Created using{' '}
        <span className="font-bold text-blue-400">React.js</span> and{' '}
        <span className="font-bold text-teal-400">Tailwind CSS</span>
      </p>
    </motion.footer>
  );
}