import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-fuchsia-400">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 ml-8 md:ml-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-black border-4 border-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
            
            <div className="bg-gray-900/40 border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-fuchsia-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-fuchsia-400" />
                    Trainee
                  </h3>
                  <h4 className="text-lg text-cyan-400 font-medium mt-1">Princesa do Campos</h4>
                </div>
                <div className="flex items-center text-gray-400 text-sm font-medium bg-gray-950 px-4 py-2 rounded-full border border-gray-800 w-fit">
                  <Calendar className="w-4 h-4 mr-2" />
                  nov/2025 - fev/2026
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {[
                  "Assisting in the company-wide migration to AWS utilizing a microservices architecture.",
                  "Performing routine Linux server monitoring and troubleshooting.",
                  "Implementing best practices for cloud security and infrastructure performance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-400">
                    <ChevronRight className="w-5 h-5 text-cyan-500 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}