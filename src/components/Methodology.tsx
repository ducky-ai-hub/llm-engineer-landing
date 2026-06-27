import { motion } from 'motion/react';
import { BookOpen, FileQuestion, Terminal, Link, ArrowRight, ExternalLink } from 'lucide-react';

const steps = [
  { icon: <BookOpen size={28} className="text-cyan-400" />, title: "Concept" },
  { icon: <FileQuestion size={28} className="text-cyan-400" />, title: "Quiz" },
  { icon: <Terminal size={28} className="text-cyan-400" />, title: "Lab" },
  { icon: <Link size={28} className="text-cyan-400" />, title: "Resources" }
];

export default function Methodology() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Không chỉ học lý thuyết</h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 sm:gap-6 mb-12 w-fit mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex sm:flex-row items-center gap-5 sm:gap-6">
                <div className="hidden sm:flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg shadow-cyan-900/10">
                    {step.icon}
                  </div>
                  <span className="font-semibold text-zinc-100">{step.title}</span>
                </div>
                
                <div className="flex sm:hidden items-center gap-3">
                  <ArrowRight className="text-zinc-600 shrink-0" size={20} />
                  {step.icon}
                  <span className="font-semibold text-zinc-100 text-lg">{step.title}</span>
                </div>

                {idx < steps.length - 1 && (
                  <ArrowRight className="text-zinc-700 hidden sm:block mt-[-28px]" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="text-zinc-400 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
            <p>
              Mỗi bài học được thiết kế theo một flow rõ ràng: học concept cốt lõi, làm quiz/test để kiểm tra mức độ hiểu bài, thực hành qua lab gần với bài toán thực tế, và có resources để tiếp tục đào sâu sau buổi học.
            </p>
            <p>
              Cách học này giúp học viên không chỉ “nghe hiểu”, mà thật sự luyện được năng lực thiết kế, xây dựng, debug và vận hành LLM application.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <a
              href="https://llme-preview.ducky-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-100 font-medium rounded-lg transition-colors"
            >
              Xem thử nội dung bài học mẫu
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
