import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-gray-800/50 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in Cloud Engineering and DevOps. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <motion.a
            href="mailto:viniciuslemos91@hotmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-sm text-gray-400">viniciuslemos91@hotmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+5541992139900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl hover:border-fuchsia-500/50 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-fuchsia-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-fuchsia-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-sm text-gray-400">+55 41 99213-9900</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vinicius-lemos-29796a169/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/40 border border-gray-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Linkedin className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-400">Connect with me</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}