import { motion } from 'framer-motion';
import cssLogo from '../assets/images/css_logo-removebg-preview.png';
import jsLogo from '../assets/images/JS-removebg-preview.png';
import cloudLogo from '../assets/images/Cloud.png';
import bootstrapLogo from '../assets/images/bootstrap-removebg-preview.png';
import oracleLogo from '../assets/images/OracleSQL-removebg-preview.png';
import htmlLogo from '../assets/images/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png';
import phpLogo from '../assets/images/php_-removebg-preview.png';
import reactLogo from '../assets/images/React-removebg-preview.png';
import tailwindLogo from '../assets/images/tailwindcss-removebg-preview.png';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="text-center py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[cssLogo, jsLogo, cloudLogo, bootstrapLogo, oracleLogo, htmlLogo, phpLogo, reactLogo, tailwindLogo].map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt=""
            className="w-16 h-16 rounded-full shadow-md hover:scale-110 transition"
            whileHover={{ scale: 1.15 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </motion.section>
  );
}