import { motion } from 'motion/react';
import { Code2, Blocks, GraduationCap, Briefcase } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

const audienceIcons = [
  <Code2 key="code" size={24} className="text-cyan-400" />,
  <Blocks key="blocks" size={24} className="text-cyan-400" />,
  <GraduationCap key="graduate" size={24} className="text-cyan-400" />,
  <Briefcase key="briefcase" size={24} className="text-cyan-400" />,
];

export default function Audience() {
  const { t } = useI18n();

  return (
    <section id="audience" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.audience.title}</h2>
          <p className="text-zinc-400 text-lg">{t.audience.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.audience.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 mb-6">
                {audienceIcons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-12 text-center p-6 border border-zinc-800 border-dashed rounded-xl"
        >
          <p className="text-zinc-400">
            {t.audience.preEngineerPrefix}{' '}
            <span className="text-zinc-200 font-medium">{t.audience.preEngineerName}</span>{' '}
            {t.audience.preEngineerSuffix}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
