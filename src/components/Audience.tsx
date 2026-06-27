import { motion } from 'motion/react';
import { Code2, Blocks, GraduationCap, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: <Code2 size={24} className="text-cyan-400" />,
    title: "Software engineer muốn pivot sang LLM Engineering",
    desc: "Bạn đã biết lập trình, đã từng xây backend/frontend/system, và muốn chuyển sang xây dựng các ứng dụng AI/LLM một cách bài bản, thực tế, có khả năng đi tới production."
  },
  {
    icon: <Blocks size={24} className="text-cyan-400" />,
    title: "Builder muốn tạo sản phẩm LLM-based",
    desc: "Bạn đang muốn xây chatbot, copilot, automation workflow, document extraction pipeline, knowledge assistant, tutor, analyst hoặc một sản phẩm AI-first nhưng chưa biết bắt đầu từ đâu."
  },
  {
    icon: <GraduationCap size={24} className="text-cyan-400" />,
    title: "Sinh viên mới ra trường muốn có kinh nghiệm thực chiến",
    desc: "Bạn có nền tảng lập trình nhưng chưa từng xây một LLM app end-to-end. Khoá học giúp bạn có tư duy hệ thống, project capstone và portfolio thực tế."
  },
  {
    icon: <Briefcase size={24} className="text-cyan-400" />,
    title: "Người làm sản phẩm/kỹ thuật muốn hiểu LLM ở production",
    desc: "Bạn không chỉ muốn dùng AI như một công cụ, mà muốn hiểu cách biến LLM thành một thành phần đáng tin cậy trong hệ thống phần mềm."
  }
];

export default function Audience() {
  return (
    <section id="audience" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Khoá học này dành cho ai?</h2>
          <p className="text-zinc-400 text-lg">Hệ thống hoá kiến thức dành cho các builder tương lai</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-12 text-center p-6 border border-zinc-800 border-dashed rounded-xl"
        >
          <p className="text-zinc-400">
            * Với học viên chưa có nền tảng kỹ thuật, có thể theo học khoá ngắn hạn <span className="text-zinc-200 font-medium">Pre-Engineer</span> trước khi vào chương trình chính.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
