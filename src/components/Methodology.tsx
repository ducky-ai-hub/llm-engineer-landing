import { motion } from 'motion/react';
import { BookOpen, FileQuestion, Terminal, Link, ArrowRight, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { getSampleLessonUrl } from '../config/links';

const stepIcons = [
  <BookOpen key="book" size={28} className="text-cyan-400" />,
  <FileQuestion key="quiz" size={28} className="text-cyan-400" />,
  <Terminal key="terminal" size={28} className="text-cyan-400" />,
  <Link key="link" size={28} className="text-cyan-400" />,
];

export default function Methodology() {
  const { locale, t } = useI18n();

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.methodology.title}</h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 sm:gap-6 mb-12 w-fit mx-auto">
            {t.methodology.steps.map((step, idx) => (
              <div key={idx} className="flex sm:flex-row items-center gap-5 sm:gap-6">
                <div className="hidden sm:flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg shadow-cyan-900/10">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-semibold text-zinc-100">{step}</span>
                </div>
                
                <div className="flex sm:hidden items-center gap-3">
                  <ArrowRight className="text-zinc-600 shrink-0" size={20} />
                  {stepIcons[idx]}
                  <span className="font-semibold text-zinc-100 text-lg">{step}</span>
                </div>

                {idx < t.methodology.steps.length - 1 && (
                  <ArrowRight className="text-zinc-700 hidden sm:block mt-[-28px]" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="text-zinc-400 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
            {t.methodology.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <a
              href={getSampleLessonUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-100 font-medium rounded-lg transition-colors"
            >
              {t.methodology.sampleLesson}
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
