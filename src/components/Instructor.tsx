import { motion } from 'motion/react';
import { User, Quote } from 'lucide-react';

export default function Instructor() {
  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-cyan-500/30 overflow-hidden shadow-xl shadow-cyan-900/20">
                <img 
                  src="/images/tuanvu.jpg" 
                  alt="Tuan Vu" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <User size={40} className="text-zinc-400 hidden" />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-1">Tuan Vu</h2>
              <p className="text-cyan-400 font-medium mb-6">Founder – Ducky AI • AI-First / LLM Application Architect</p>
              
              <div className="space-y-4 text-zinc-300 leading-relaxed mb-8">
                <p>
                  Tuan Vu có hơn 20 năm kinh nghiệm trong ngành phần mềm, từng tham gia nhiều vai trò từ developer, technical lead đến solution architect. Anh có kinh nghiệm sâu về kiến trúc hệ thống, tích hợp giải pháp, thiết kế sản phẩm phần mềm và hiện tập trung vào việc xây dựng các ứng dụng LLM/AI-first có giá trị thực tiễn.
                </p>
                <p>
                  Trong vai trò Founder của Ducky AI, anh theo đuổi hướng tiếp cận AI-first nhưng không “ảo tưởng AI”: LLM cần được đặt vào kiến trúc phần mềm đúng, có boundary rõ ràng, có eval, có guardrails, có khả năng debug và có thể vận hành trong thực tế.
                </p>
                <p>
                  Triết lý giảng dạy: không học AI bằng cách chạy theo hype hoặc copy framework, mà học bằng cách hiểu bản chất kỹ thuật, tự xây từ gốc, nhìn rõ trade-off và biết cách đưa hệ thống vào production.
                </p>
              </div>

              <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800/50">
                <Quote className="text-cyan-500/50 mb-3" size={24} />
                <p className="italic text-zinc-400 font-medium">
                  Hệ thống AI tốt không chỉ cần model mạnh — mà cần kiến trúc đúng, tri thức đúng, eval nghiêm túc và khả năng vận hành an toàn trong thực tế.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
