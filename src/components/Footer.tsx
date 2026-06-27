import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pt-16 pb-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 mb-6 text-cyan-500">
          <Terminal size={24} />
        </div>
        <h2 className="text-2xl font-bold mb-4">LLM Engineer Thực Chiến</h2>
        <div className="text-zinc-400 space-y-2 mb-12">
          <p>Không chỉ học cách gọi model.</p>
          <p>Không chỉ học cách viết prompt.</p>
          <p>Không chỉ học cách dùng framework.</p>
          <p className="text-zinc-300 font-medium mt-4">Học cách xây dựng hệ thống LLM thật sự — từ bản chất kỹ thuật đến production.</p>
        </div>
        <div className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} 🦆 Ducky AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
