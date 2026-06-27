import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  "Phân biệt khi nào nên dùng prompting, RAG, tool calling, workflow, fine-tuning hoặc không nên dùng LLM",
  "Hiểu các khái niệm LLM internals: token, context window, sampling, instruction hierarchy, reasoning model",
  "Thiết kế prompt như một interface contract thay vì một đoạn văn “cầu may”",
  "Xây structured output với schema, validation, retry và fallback",
  "Thiết kế RAG pipeline cơ bản và nâng cao",
  "Xây LLM Wiki/Knowledge Base để LLM sử dụng tri thức tốt hơn",
  "Thiết kế tool calling an toàn, có permission và confirmation boundary",
  "Xây agentic workflow có kiểm soát bằng state machine, router, planner, evaluator",
  "Thiết kế memory và context layer cho ứng dụng dài hạn",
  "Xây eval dataset, regression test và LLM-as-judge đúng cách",
  "Thêm guardrails, logging, tracing, replay và audit",
  "Tối ưu cost, latency, model routing và caching",
  "Nhận diện design patterns và anti-patterns trong LLM application",
  "Làm việc hiệu quả với ChatGPT/Codex như một AI pair engineer",
  "Xây harness để test prompt, RAG, workflow và model versions",
  "Hoàn thành một capstone MVP có thể đưa vào portfolio hoặc phát triển tiếp"
];

export default function Outcomes() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn sẽ học được gì?</h2>
          <p className="text-zinc-400 text-lg">Những kỹ năng thực chiến để đưa LLM vào production.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {outcomes.map((item, index) => (
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
