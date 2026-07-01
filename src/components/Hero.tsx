import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

export default function Hero() {
  const { t } = useI18n();
  const [typedCount, setTypedCount] = useState(0);
  const fullText = t.hero.badge;

  useEffect(() => {
    let i = 0;
    let timeoutId: number;
    setTypedCount(0);

    const typeChar = () => {
      i++;
      setTypedCount(i);
      if (i < fullText.length) {
        // Random delay between 50ms and 150ms for realistic typing
        const randomDelay = Math.random() * (150 - 50) + 50;
        timeoutId = window.setTimeout(typeChar, randomDelay);
      }
    };

    // Initial delay before typing starts
    timeoutId = window.setTimeout(typeChar, 500);

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-sm font-mono mb-8 h-8"
        >
          <Terminal size={14} />
          <span className="relative whitespace-nowrap">
            <span className="invisible">{fullText}_</span>
            <span className="absolute left-0 top-0">
              {fullText.slice(0, typedCount)}
              <span className="animate-pulse">_</span>
            </span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {t.hero.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto font-medium"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing-card"
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {t.hero.enroll}
            <ArrowRight size={18} />
          </a>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800 font-semibold rounded-lg transition-colors flex items-center justify-center"
          >
            {t.hero.viewCurriculum}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-4xl mx-auto mt-24 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center leading-relaxed flex flex-wrap items-center justify-center gap-2">
          <span>{t.hero.journeyPrefix}</span>
          <span className="px-3 py-1 bg-zinc-800 text-zinc-200 rounded-lg text-base md:text-lg font-mono tracking-tight">{t.hero.journeyStart}</span>
          <span>{t.hero.journeyConnector}</span>
          <span className="px-3 py-1 bg-cyan-500/15 text-cyan-400 rounded-lg text-base md:text-lg">{t.hero.journeyEnd}</span>
        </h3>
        <p className="text-zinc-400 mb-6 text-center">
          {t.hero.journeyDescription}
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-400">
          <ul className="space-y-3">
            {t.hero.problems.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-red-400">✗</span> {item}</li>
            ))}
          </ul>
          <ul className="space-y-3">
            {t.hero.decisions.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-green-400">✓</span> {item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
