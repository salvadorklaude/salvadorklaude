import { motion } from 'framer-motion';
import klodimg from '../assets/images/klod.jpg';

export default function About() {
  return (
    <motion.section
      id="bio"
      className="text-center py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <motion.img
        src={klodimg}
        alt="My Picture"
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        viewport={{ once: true }}
      />
      <p className="max-w-xl mx-auto">
      I’m a 23-year-old IT enthusiast currently pursuing my degree at Far Eastern University Institute of technology. With a strong passion for full-stack development and IT infrastructure, I’ve contributed to projects ranging from donation platforms to school management systems. My foundation in communication and teamwork enables me to collaborate effectively and deliver impactful solutions. I’m driven by a desire to build technology that solves real-world problems and makes a meaningful difference.
      </p>
          </motion.section>
  );
}
