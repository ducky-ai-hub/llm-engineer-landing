import { motion } from 'motion/react';
import { Terminal, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { getSampleLessonUrl } from '../config/links';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { locale, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-zinc-950/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollTo(e, 'hero')}
          aria-label={t.header.homeLabel}
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors"
        >
          <Terminal size={24} />
          <span className="font-bold text-zinc-100 hidden sm:block">{t.header.brand}</span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6 text-sm font-medium">
          <a href="#audience" onClick={(e) => scrollTo(e, 'audience')} className="text-zinc-200 hover:text-cyan-400 transition-colors hidden md:block">{t.header.audience}</a>
          <a href="#why-course" onClick={(e) => scrollTo(e, 'why-course')} className="text-zinc-200 hover:text-cyan-400 transition-colors hidden lg:block">{t.header.whyCourse}</a>
          <a href="#curriculum" onClick={(e) => scrollTo(e, 'curriculum')} className="text-zinc-200 hover:text-cyan-400 transition-colors hidden sm:block">{t.header.curriculum}</a>
          <a 
            href={getSampleLessonUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 hover:bg-cyan-900/50 hover:text-cyan-300 transition-colors"
          >
            {t.header.sampleLesson}
            <ExternalLink size={14} />
          </a>
          <LanguageSwitcher />
          <a 
            href="#pricing-card" 
            onClick={(e) => scrollTo(e, 'pricing-card')}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors font-semibold"
          >
            {t.header.enroll}
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
