import { motion } from 'motion/react';
import { ShieldCheck, Database, Layers, Rocket } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

const reasonIcons = [
  <ShieldCheck key="shield" size={28} className="text-blue-400" />,
  <Database key="database" size={28} className="text-emerald-400" />,
  <Layers key="layers" size={28} className="text-purple-400" />,
  <Rocket key="rocket" size={28} className="text-orange-400" />,
];

export default function WhyCourse() {
  const { t } = useI18n();

  return (
    <section id="why-course" className="py-24 px-4 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyCourse.title}</h2>
          <p className="text-zinc-400 text-lg">{t.whyCourse.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {t.whyCourse.reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1">{reasonIcons[index]}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-zinc-400 mb-6 pl-11">{item.description}</p>
              <div className="pl-11">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                  {item.items.map((li, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
