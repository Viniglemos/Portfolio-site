import { motion } from 'motion/react';
import { Server, Terminal, Code2, Globe } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "Global Background", desc: "Studied Cloud Engineering in Sydney, Australia." },
    { icon: <Terminal className="w-6 h-6 text-fuchsia-400" />, title: "IaC Focus", desc: "Passionate about Infrastructure as Code & automation." },
    { icon: <Server className="w-6 h-6 text-emerald-400" />, title: "Cloud Native", desc: "Experience building with AWS services." },
    { icon: <Code2 className="w-6 h-6 text-blue-400" />, title: "Continuous Learning", desc: "Always building real-world projects." },
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800/50 bg-black/50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-gray-400 leading-relaxed"
          >
            <p>
              I am a Junior Cloud Engineer with a strong foundation acquired during my specialized studies in <span className="text-gray-200 font-medium">Sydney, Australia</span>. I specialize in designing, deploying, and maintaining robust cloud infrastructure.
            </p>
            <p>
              My technical journey is driven by a deep passion for <span className="text-cyan-400 font-medium">Infrastructure as Code (IaC)</span> and automation. I have been intensively studying with AWS, Terraform, Docker, and Linux environments, constantly seeking ways to optimize CI/CD pipelines and improve deployment efficiency.
            </p>
            <p>
              Beyond the terminal, I believe in continuous learning. I dedicate my time to building real-world projects that solve actual problems, bridging the gap between development and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group"
              >
                <div className="mb-4 p-3 bg-gray-950 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}