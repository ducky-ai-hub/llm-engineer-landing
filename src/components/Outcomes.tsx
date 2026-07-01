import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

export default function Outcomes() {
  const { t } = useI18n();

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.outcomes.title}</h2>
          <p className="text-zinc-400 text-lg">{t.outcomes.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {t.outcomes.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
            >
              <CheckCircle2 size={20} className="text-cyan-500 mt-0.5 shrink-0" />
              <span className="text-zinc-300 leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
