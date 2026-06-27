import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const modules = [
  {
    title: "Module 1 — AI/LLM Foundation",
    sessions: [
      { name: "Buổi 1 — AI/LLM Foundation: bức tranh tổng quan", desc: "Hiểu LLM khác biệt thế nào, các nhóm use case, phân tích giới hạn nền tảng." },
      { name: "Buổi 2 — LLM internals vừa đủ dùng cho application engineer", desc: "Token, context window, attention, completion, sampling, reasoning model." },
      { name: "Buổi 3 — LLM ecosystem: API, local hosted, Hugging Face", desc: "Open-weight vs closed, local vs API, trade-off về cost, privacy, latency." },
      { name: "Buổi 4 — RAG vs Fine-tuning vs Prompting vs Tooling", desc: "Chọn đúng chiến lược. Fine-tuning không phải để 'nhét knowledge'." }
    ]
  },
  {
    title: "Module 2 — Prompt, Structured Output, LLM Contracts",
    sessions: [
      { name: "Buổi 5 — Prompt Engineering thực dụng", desc: "Prompt như một interface contract: role, task, spec, constraints, examples." },
      { name: "Buổi 6 — Structured Output và schema-first design", desc: "JSON schema, typed output, validation, retry, fallback và LLM contract." }
    ]
  },
  {
    title: "Module 3 — Knowledge Design, RAG, LLM Wiki",
    sessions: [
      { name: "Buổi 7 — RAG căn bản, nhưng đủ dùng", desc: "Vector DB, chunking, retrieval pipeline; grounded answer và citation." },
      { name: "Buổi 8 — RAG nâng cao, cô đọng", desc: "BM25, hybrid search, query rewrite, reranking, context compression." },
      { name: "Buổi 9 — LLM Wiki và Knowledge Base Engineering", desc: "Xây tri thức được cấu trúc hoá: entity, concept, procedure, decision table." }
    ]
  },
  {
    title: "Module 4 — Tool Calling, Workflow, Memory",
    sessions: [
      { name: "Buổi 10 — Tool Calling và function calling", desc: "Thiết kế tool interface, guarded execution và confirmation." },
      { name: "Buổi 11 — Agentic Workflow", desc: "Planner-executor, router, state machine. Tránh over-agentic architecture." },
      { name: "Buổi 12 — Memory, context engineering và cache", desc: "Conversation history, memory scoping, caching strategies (prompt, prefix)." }
    ]
  },
  {
    title: "Module 5 — Evaluation, Guardrails, Production",
    sessions: [
      { name: "Buổi 13 — Evaluation cho LLM application", desc: "Eval dataset, regression test, LLM-as-judge, metrics (accuracy, cost, latency)." },
      { name: "Buổi 14 — Reliability, guardrails và safety", desc: "Input/output guardrails, tracing, replay, audit. Handle hallucination, injection." },
      { name: "Buổi 15 — Cost, latency và model routing", desc: "Cấu trúc chi phí, model routing, fallback, batching, queue." }
    ]
  },
  {
    title: "Module 6 — Architecture, Patterns, Anti-patterns",
    sessions: [
      { name: "Buổi 16 — LLM application architecture", desc: "API layer, orchestration, prompt, tool, retrieval, eval layer." },
      { name: "Buổi 17 — LLM design patterns và anti-patterns", desc: "Router, planner, state reducer. Anti-patterns: God prompt, God agent." }
    ]
  },
  {
    title: "Module 7 — Working with AI/Codex, Harness Engineering",
    sessions: [
      { name: "Buổi 18 — Làm việc/vibe code với ChatGPT và Codex", desc: "Dùng AI như pair engineer. Giao việc bằng context, constraints, acceptance." },
      { name: "Buổi 19 — Harness Engineering cơ bản", desc: "Prompt harness, eval harness, simulation harness. Thiết kế harness tối thiểu." }
    ]
  },
  {
    title: "Module 8 — Applied Case Studies & Capstone",
    sessions: [
      { name: "Buổi 20 — Applied case studies", desc: "Phân tích support assistant, extraction pipeline, coding assistant." },
      { name: "Buổi 21 — Capstone workshop 1", desc: "Chọn đề tài, định hình scope MVP, kiến trúc và data flow." },
      { name: "Buổi 22 — Capstone workshop 2", desc: "Build MVP, logging/tracing, minimal eval cases và demo script." },
      { name: "Buổi 23 — Capstone demo và review", desc: "Review architecture, prompt, retrieval, workflow và cost." },
      { name: "Buổi 24 — Operating LLM systems và mentoring roadmap", desc: "Production rollout checklist. Kế hoạch mentoring 3 tháng." }
    ]
  }
];

export default function Curriculum() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chương trình học</h2>
          <p className="text-zinc-400 text-lg">8 modules, 24 buổi học trực tiếp. Trọng tâm thực chất, không phụ thuộc framework.</p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((mod, idx) => (
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
                        <p className="text-zinc-400 text-sm leading-relaxed">{session.desc}</p>
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
            href="https://llme-preview.ducky-ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-100 font-medium rounded-lg transition-colors"
          >
            Xem thử nội dung bài học mẫu
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
