import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { getSampleLessonUrl } from '../config/links';

export default function Curriculum() {
  const { locale, t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-24 px-4 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.curriculum.title}</h2>
          <p className="text-zinc-400 text-lg">{t.curriculum.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {t.curriculum.modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="border border-zinc-800 rounded-2xl bg-zinc-950 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-label={`${openIndex === idx ? t.curriculum.collapseModule : t.curriculum.expandModule}: ${mod.title}`}
                className="w-full px-6 py-5 flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-zinc-100">{mod.title}</h3>
                {openIndex === idx ? (
                  <ChevronUp className="text-zinc-500 shrink-0" />
                ) : (
                  <ChevronDown className="text-zinc-500 shrink-0" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 py-6 border-t border-zinc-800">
                  <div className="space-y-6">
                    {mod.sessions.map((session, sIdx) => (
                      <div key={sIdx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full">
                        <h4 className="text-zinc-200 font-medium mb-1">{session.name}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{session.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={getSampleLessonUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-100 font-medium rounded-lg transition-colors"
          >
            {t.curriculum.sampleLesson}
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
