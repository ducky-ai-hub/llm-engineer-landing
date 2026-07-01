import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MonitorPlay, Zap, ArrowRight, Check, X } from 'lucide-react';
import Turnstile from './Turnstile';
import { useI18n } from '../i18n/useI18n';

export default function Enrollment() {
  const { locale, t } = useI18n();
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '';
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const [lockedCardHeight, setLockedCardHeight] = useState<number>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  useEffect(() => {
    setFormError("");
  }, [locale]);

  const handleTurnstileError = useCallback((message: string) => {
    setTurnstileToken("");
    setFormError(message);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
    setFormError(t.enrollment.errors.captchaExpired);
  }, [t.enrollment.errors.captchaExpired]);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setFormError("");
  }, []);

  const closeForm = () => {
    setIsFormOpen(false);
    setTurnstileToken("");
    setFormError("");
  };

  const openForm = () => {
    const cardHeight = pricingCardRef.current?.getBoundingClientRect().height;

    if (cardHeight) {
      setLockedCardHeight(cardHeight);
    }

    setIsFormOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check - if filled, silently succeed without sending data
    if (formData.get('botcheck')) {
      setIsSuccess(true);
      return;
    }

    if (!turnstileSiteKey) {
      setFormError(t.enrollment.errors.missingSiteKey);
      return;
    }

    if (!turnstileToken) {
      setFormError(t.enrollment.errors.captchaRequired);
      return;
    }

    formData.set('cf-turnstile-response', turnstileToken);

    // Frontend validation
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(t.enrollment.errors.invalidEmail);
      return;
    }

    const phone = formData.get('phone') as string;
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    const phoneRegex = /^\+?[0-9]{8,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setFormError(t.enrollment.errors.invalidPhone);
      return;
    }

    setIsSubmitting(true);
    
    // Convert FormData to URLSearchParams since Apps Script parses application/x-www-form-urlencoded best
    const data = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }

    // Cấu hình URL của Google Apps Script
    // Tốt nhất là khai báo trong .env (VITE_GOOGLE_SCRIPT_URL=...)
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";
    
    try {
      if (scriptUrl === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL" || !scriptUrl) {
        setFormError(t.enrollment.errors.missingScriptUrl);
        setIsSubmitting(false);
        return;
      }

      // We use 'no-cors' mode because Google Apps Script redirects to a different domain 
      // which causes CORS issues in the browser if we try to read the response.
      // Note: 'no-cors' means response.ok will be false (opaque response), 
      // but the request still goes through successfully.
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data
      });
      
      // With no-cors, we assume success if no network error is thrown
      setIsSuccess(true);
      setFormError("");
      setTurnstileToken("");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormError(t.enrollment.errors.network);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-zinc-950 relative border-t border-zinc-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-gradient-to-b from-cyan-900/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Info Side */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.enrollment.infoTitle}</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                  <MonitorPlay className="text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-1">{t.enrollment.formats[0].title}</h3>
                  <p className="text-sm text-zinc-400">{t.enrollment.formats[0].description}</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                  <Calendar className="text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-1">{t.enrollment.formats[1].title}</h3>
                  <p className="text-sm text-zinc-400">{t.enrollment.formats[1].description}</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl sm:col-span-2 flex items-start gap-4">
                  <Zap className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.enrollment.formats[2].title}</h3>
                    <p className="text-sm text-zinc-400">{t.enrollment.formats[2].description}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{t.enrollment.requirementsTitle}</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                {t.enrollment.requirements}
              </p>
              <p className="text-zinc-500 text-sm italic">
                {t.enrollment.requirementsNote}
              </p>
            </motion.div>
          </div>

          {/* Pricing Card Side */}
          <div className="lg:col-span-2">
            <motion.div
              ref={pricingCardRef}
              id="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={
                lockedCardHeight === undefined
                  ? undefined
                  : { height: lockedCardHeight }
              }
              className="bg-zinc-900 border-2 border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col scroll-mt-24 min-h-[500px]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
              
              <AnimatePresence mode="wait">
                {isFormOpen ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{t.enrollment.form.title}</h3>
                        <p className="text-zinc-400 text-sm">{t.enrollment.form.subtitle}</p>
                      </div>
                      <button 
                        type="button"
                        onClick={closeForm}
                        aria-label={t.enrollment.form.closeLabel}
                        className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {isSuccess ? (
                      <div className="flex-grow flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20">
                          <Check size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">{t.enrollment.form.successTitle}</h4>
                        <p className="text-zinc-400 text-sm">{t.enrollment.form.successMessage}</p>
                        <button 
                          onClick={() => { closeForm(); setIsSuccess(false); }}
                          className="mt-8 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm font-medium transition-colors"
                        >
                          {t.enrollment.form.back}
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-3">
                        <input type="hidden" name="subject" value={t.enrollment.form.subject} />
                        
                        {/* Honeypot field - Hidden from users, bots will fill it */}
                        <div className="hidden" aria-hidden="true">
                          <label htmlFor="botcheck">{t.enrollment.form.honeypot}</label>
                          <input type="text" name="botcheck" id="botcheck" />
                        </div>

                        {formError && (
                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                            {formError}
                          </div>
                        )}
                        
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">{t.enrollment.form.nameLabel}</label>
                          <input required type="text" id="name" name="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder={t.enrollment.form.namePlaceholder} />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">{t.enrollment.form.emailLabel}</label>
                          <input required type="email" id="email" name="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder={t.enrollment.form.emailPlaceholder} />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">{t.enrollment.form.phoneLabel}</label>
                          <input required type="tel" id="phone" name="phone" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder={t.enrollment.form.phonePlaceholder} />
                        </div>

                        <div>
                          <label htmlFor="note" className="block text-sm font-medium text-zinc-300 mb-1">{t.enrollment.form.noteLabel}</label>
                          <textarea id="note" name="note" rows={2} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none text-sm" placeholder={t.enrollment.form.notePlaceholder}></textarea>
                        </div>

                        {turnstileSiteKey ? (
                          <Turnstile
                            siteKey={turnstileSiteKey}
                            verificationError={t.enrollment.errors.captchaVerification}
                            loadError={t.enrollment.errors.captchaLoad}
                            onError={handleTurnstileError}
                            onExpire={handleTurnstileExpire}
                            onVerify={handleTurnstileVerify}
                          />
                        ) : (
                          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 text-sm">
                            {t.enrollment.form.captchaNotConfigured}
                          </div>
                        )}

                        <button 
                          type="submit" 
                          disabled={isSubmitting || !turnstileToken}
                          className="w-full mt-auto py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                              {t.enrollment.form.submitting}
                            </span>
                          ) : (
                            t.enrollment.form.submit
                          )}
                        </button>
                      </form>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="pricing"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onAnimationComplete={(definition) => {
                      if (
                        typeof definition === 'object' &&
                        !Array.isArray(definition) &&
                        definition.opacity === 1
                      ) {
                        setLockedCardHeight(undefined);
                      }
                    }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">{t.enrollment.pricing.title}</h3>
                      <p className="text-zinc-400 text-sm">{t.enrollment.pricing.subtitle}</p>
                    </div>

                    <div className="mb-8">
                      <div className="text-zinc-500 line-through mb-1">{t.enrollment.pricing.originalPrice}</div>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-zinc-100">{t.enrollment.pricing.price}</span>
                        <span className="text-zinc-400 font-medium mb-1">{t.enrollment.pricing.currency}</span>
                      </div>
                      <div className="inline-block mt-3 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                        {t.enrollment.pricing.offer}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      {t.enrollment.pricing.benefits.map((item, i) => (
                        <div key={i} className="flex gap-3 text-sm text-zinc-300">
                          <Check size={18} className="text-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={openForm}
                      className="w-full mt-auto py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {t.enrollment.pricing.enrollNow}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
