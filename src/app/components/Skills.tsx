import { motion } from 'motion/react';
import { Cloud, Wrench, FileCode, Network, Settings } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      skills: ["AWS", "EC2", "S3", "IAM", "SNS", "VPC"],
      gradient: "from-cyan-500/10 to-transparent",
      border: "border-cyan-500/30"
    },
    {
      title: "DevOps & IaC",
      icon: <Wrench className="w-6 h-6 text-fuchsia-400" />,
      skills: ["Terraform", "Ansible", "Docker"],
      gradient: "from-fuchsia-500/10 to-transparent",
      border: "border-fuchsia-500/30"
    },
    {
      title: "Programming",
      icon: <FileCode className="w-6 h-6 text-emerald-400" />,
      skills: ["Python", "Bash", "Shell Scripting"],
      gradient: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/30"
    },
    {
      title: "Networking",
      icon: <Network className="w-6 h-6 text-blue-400" />,
      skills: ["DNS", "VPN", "Routing", "Firewalls"],
      gradient: "from-blue-500/10 to-transparent",
      border: "border-blue-500/30"
    },
    {
      title: "Tools & CI/CD",
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      skills: ["Git", "GitHub Actions", "CI/CD Pipelines"],
      gradient: "from-purple-500/10 to-transparent",
      border: "border-purple-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-800/50 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-emerald-400">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${category.gradient} bg-gray-900/50 border ${category.border} p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow backdrop-blur-sm`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-950 rounded-xl shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-950/80 border border-gray-800 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}