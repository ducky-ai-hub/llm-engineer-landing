import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MonitorPlay, Zap, ArrowRight, Check, X } from 'lucide-react';

export default function Enrollment() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");

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

    // Frontend validation
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Email không hợp lệ. Vui lòng kiểm tra lại.");
      return;
    }

    const phone = formData.get('phone') as string;
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    const phoneRegex = /^\+?[0-9]{8,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setFormError("Số điện thoại không hợp lệ. Vui lòng điền từ 8-15 số (có thể chứa mã vùng bắt đầu bằng +).");
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
        setFormError("Vui lòng cấu hình VITE_GOOGLE_SCRIPT_URL trong file .env hoặc thay URL trực tiếp vào code (ở Enrollment.tsx).");
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
      form.reset();
    } catch (error) {
      console.error(error);
      setFormError("Không thể kết nối. Vui lòng kiểm tra lại mạng.");
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
              <h2 className="text-3xl font-bold mb-6">Hình thức & Yêu cầu</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                  <MonitorPlay className="text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-1">Học trực tuyến</h3>
                  <p className="text-sm text-zinc-400">24 buổi học trực tiếp qua Zoom, chia làm 8 modules.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                  <Calendar className="text-cyan-400 mb-3" />
                  <h3 className="font-semibold mb-1">Thực hành liên tục</h3>
                  <p className="text-sm text-zinc-400">Có bài thực hành trong từng module và 1 capstone project cuối khoá.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl sm:col-span-2 flex items-start gap-4">
                  <Zap className="text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Mentoring dài hạn</h3>
                    <p className="text-sm text-zinc-400">Giảng viên hỗ trợ 1:1 trong quá trình học và mentoring miễn phí thêm 3 tháng sau khi kết thúc khoá học.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Yêu cầu đầu vào</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Học viên nên có nền tảng cơ bản về lập trình. Bạn không nhất thiết phải là AI/ML engineer. Khoá học được thiết kế cho application engineer và builder muốn xây dựng ứng dụng LLM thực tế.
              </p>
              <p className="text-zinc-500 text-sm italic">
                * Với học viên chưa có nền tảng kỹ thuật, có thể theo học khoá ngắn hạn Pre-Engineer trước khi tham gia chương trình chính.
              </p>
            </motion.div>
          </div>

          {/* Pricing Card Side */}
          <div className="lg:col-span-2">
            <motion.div
              id="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                        <h3 className="text-2xl font-bold mb-1">Thông tin đăng ký</h3>
                        <p className="text-zinc-400 text-sm">Điền thông tin để tham gia khoá học</p>
                      </div>
                      <button 
                        onClick={() => setIsFormOpen(false)}
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
                        <h4 className="text-xl font-bold mb-2">Đăng ký thành công!</h4>
                        <p className="text-zinc-400 text-sm">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để hoàn tất thủ tục.</p>
                        <button 
                          onClick={() => { setIsFormOpen(false); setIsSuccess(false); }}
                          className="mt-8 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm font-medium transition-colors"
                        >
                          Quay lại
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex-grow flex flex-col space-y-4">
                        <input type="hidden" name="subject" value="Đăng ký mới từ khoá học LLM Engineer" />
                        
                        {/* Honeypot field - Hidden from users, bots will fill it */}
                        <div className="hidden" aria-hidden="true">
                          <label htmlFor="botcheck">Đừng điền vào trường này nếu bạn là người</label>
                          <input type="text" name="botcheck" id="botcheck" />
                        </div>

                        {formError && (
                          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                            {formError}
                          </div>
                        )}
                        
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Họ và tên *</label>
                          <input required type="text" id="name" name="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="Nhập họ và tên..." />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email *</label>
                          <input required type="email" id="email" name="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="Địa chỉ email..." />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">Số điện thoại *</label>
                          <input required type="tel" id="phone" name="phone" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm" placeholder="Số điện thoại liên hệ..." />
                        </div>

                        <div className="pb-4">
                          <label htmlFor="note" className="block text-sm font-medium text-zinc-300 mb-1">Ghi chú thêm</label>
                          <textarea id="note" name="note" rows={2} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none text-sm" placeholder="Bạn có câu hỏi hay mong muốn gì cho khoá học?"></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full mt-auto py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                              Đang gửi...
                            </span>
                          ) : (
                            "Gửi đăng ký"
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
                    className="flex flex-col h-full"
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Đăng ký khoá học</h3>
                      <p className="text-zinc-400 text-sm">Bắt đầu xây dựng thế hệ ứng dụng AI-first tiếp theo.</p>
                    </div>

                    <div className="mb-8">
                      <div className="text-zinc-500 line-through mb-1">20.000.000 VNĐ</div>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-zinc-100">16.000.000</span>
                        <span className="text-zinc-400 font-medium mb-1">VNĐ</span>
                      </div>
                      <div className="inline-block mt-3 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                        Ưu đãi hiện tại
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      {[
                        "Nền tảng vững chắc về LLM application engineering",
                        "Khả năng tự thiết kế và xây LLM-based app end-to-end",
                        "Capstone MVP cho portfolio",
                        "Tư duy production-readiness thực chiến",
                        "Mentoring 3 tháng sau khoá học"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 text-sm text-zinc-300">
                          <Check size={18} className="text-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="w-full mt-auto py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Đăng ký ngay
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
