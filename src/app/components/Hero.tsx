import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';
import profile from "../../assets/profile.jpg"; 
import cvEn from "../../assets/cv-en.pdf";
import cvPt from "../../assets/cv-pt.pdf";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative inline-block"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-gray-900 overflow-hidden mx-auto relative z-10 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            <img
              src={profile}
              alt="Vinicius Lemos"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">Vinicius Lemos</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 font-medium mb-6"
        >
          Junior Cloud Engineer <span className="text-cyan-500 mx-2">|</span> DevOps Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          "Building scalable cloud infrastructure and automation solutions"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
          <a
  href={cvEn}
  download
  className="flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-fuchsia-500 hover:text-white text-gray-300 font-semibold rounded-full transition-all hover:scale-105"
>
  <Download className="w-5 h-5" />
  CV (EN)
</a>

<a
  href={cvPt}
  download
  className="flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-cyan-500 hover:text-white text-gray-300 font-semibold rounded-full transition-all hover:scale-105"
>
  <Download className="w-5 h-5" />
  CV (PT)
</a>
        </motion.div>
      </div>
    </section>
  );
}