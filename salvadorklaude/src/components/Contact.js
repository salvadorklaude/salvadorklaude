import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="text-center py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <div className="space-y-3 text-lg">
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-blue-400" />
          <span>klodsalvador@gmail.com</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Linkedin className="w-5 h-5 text-blue-600" />
          <a
            href="https://www.linkedin.com/in/salvadorklaude"
            className="hover:underline text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            salvadorklaude
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5 text-green-500" />
          <span>+63 999 489 6376</span>
        </div>
      </div>
    </motion.section>
  );
}
