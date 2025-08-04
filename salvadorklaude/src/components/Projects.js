import { motion } from 'framer-motion';
import courseforge from '../assets/images/seamac2.png';
import feathers from '../assets/images/Feathers.jpg';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="text-center py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <h2 className="text-2xl font-semibold mb-6">Previous Projects</h2>
      <div className="space-y-6">
        {[{ img: courseforge, title: 'CourseForge', role: 'Back-end Developer' }, 
          { img: feathers, title: 'Feathers Portal', role: 'Full-Stack Developer' }]
          .map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl card"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={project.img} alt={project.title} className="w-full rounded mb-4" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.title === 'CourseForge' ? 'Used by: SEAMAC International Training Institute' : ''}</p>
            <ul className="list-disc list-inside text-left max-w-xl mx-auto">
              <li>Role: {project.role}</li>
              <li>Features: {project.title === 'CourseForge' ? 'Dark Mode, Responsive Layout, Recommender System' : 'Donation System, Mobile Responsive UI, User-friendly features'}</li>
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}