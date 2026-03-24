import { motion } from 'motion/react';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Diploma in Cloud Engineering",
      school: "Kent Institute (Sydney)",
      status: "Completed",
    },
    {
      degree: "Advanced Diploma in Telecommunications",
      school: "Sydney, Australia",
      status: "Completed",
    },
    {
      degree: "Systems Development",
      school: "PUC",
      status: "Current",
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "AWS Certified Solutions Architect (Training)",
    "Networking Foundations",
    "Linux Certification",
    "Terraform",
    "Python"
  ];

  return (
    <section id="education" className="py-24 px-6 border-t border-gray-800/50 relative">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & <span className="text-blue-400">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-blue-400" />
              Academic Background
            </h3>
            
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                <div className="mt-1 p-2 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-cyan-400 font-medium text-sm my-1">{edu.school}</p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mt-2 ${edu.status === 'Current' ? 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20' : 'bg-gray-800 text-gray-400'}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-fuchsia-400" />
              Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-gray-900/40 border border-gray-800 p-5 rounded-2xl flex items-center gap-3 hover:border-fuchsia-500/30 transition-colors">
                  <BadgeCheck className="w-6 h-6 text-fuchsia-400 shrink-0" />
                  <span className="text-gray-300 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}