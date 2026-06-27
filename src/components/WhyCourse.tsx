import { motion } from 'motion/react';
import { ShieldCheck, Database, Layers, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={28} className="text-blue-400" />,
    title: "1. Học theo hướng production, không chỉ demo",
    desc: "Rất nhiều LLM app trông ấn tượng ở bản demo nhưng vỡ khi gặp dữ liệu thật, người dùng thật, lỗi thật và chi phí thật. Khoá học đi thẳng vào các vấn đề production:",
    list: ["Hallucination & Non-determinism", "Context limit & Stale knowledge", "Retrieval sai & Prompt injection", "Tool misuse & Cost tăng khó kiểm soát"]
  },
  {
    icon: <Database size={28} className="text-emerald-400" />,
    title: "2. Build from scratch — không bị framework che mờ bản chất",
    desc: "LangChain, LangGraph hay CrewAI đều có giá trị. Nhưng nếu nhảy ngay vào framework, bạn dễ biết 'cách dùng tool' mà không hiểu 'vì sao hệ thống hoạt động'.",
    list: ["Tự thiết kế prompt contract", "Tự parse và validate structured output", "Tự xây RAG / LLM Wiki pipeline nhỏ", "Tự xây workflow/state machine đơn giản"]
  },
  {
    icon: <Layers size={28} className="text-purple-400" />,
    title: "3. Tư duy kiến trúc thay vì chỉ học kỹ thuật rời rạc",
    desc: "LLM app không chỉ là 'gọi API model'. Một hệ thống nghiêm túc cần nhiều layer. Khoá học giúp bạn nhìn LLM application như một hệ thống phần mềm thật sự.",
    list: ["API & Orchestration layer", "Memory & Context layer", "Evaluation & Guardrail layer", "Cost/latency control layer"]
  },
  {
    icon: <Rocket size={28} className="text-orange-400" />,
    title: "4. Có capstone project và mentoring sau khoá học",
    desc: "Bạn không chỉ học lý thuyết. Cuối khoá, học viên sẽ chọn một đề tài capstone và xây MVP end-to-end.",
    list: ["Xây MVP end-to-end", "Mentoring miễn phí 3 tháng sau khoá học", "Cải thiện eval & production-readiness", "Chuẩn bị portfolio thực chiến"]
  }
];

export default function WhyCourse() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vì sao nên học khoá này?</h2>
          <p className="text-zinc-400 text-lg">Bản chất kỹ thuật phải hiểu trước. Framework có thể học sau.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-zinc-400 mb-6 pl-11">{item.desc}</p>
              <div className="pl-11">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                  {item.list.map((li, i) => (
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
