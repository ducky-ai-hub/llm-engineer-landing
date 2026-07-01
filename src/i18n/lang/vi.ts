const vi = {
  meta: {
    title: 'LLM Engineer Thực Chiến',
  },
  language: {
    switcherLabel: 'Chọn ngôn ngữ',
    vietnamese: 'Tiếng Việt',
    english: 'English',
    vietnameseShort: 'VI',
    englishShort: 'EN',
    vietnameseFlag: '🇻🇳',
    englishFlag: '🇬🇧',
  },
  header: {
    brand: 'LLME',
    audience: 'Dành cho ai',
    whyCourse: 'Vì sao chọn',
    curriculum: 'Chương trình',
    sampleLesson: 'Bài học mẫu',
    enroll: 'Đăng ký',
    homeLabel: 'Về đầu trang',
  },
  hero: {
    badge: 'Production-Ready LLM Course',
    title: 'LLM Engineer',
    titleHighlight: 'Thực Chiến',
    subtitle: 'Build LLM Apps từ gốc đến production',
    description:
      'Không chỉ học cách viết prompt hay ráp framework. Khoá học giúp bạn hiểu cách một LLM application thật sự được thiết kế, xây dựng, đánh giá và vận hành. Từ đó, bạn biết cách kiểm soát trade-off kỹ thuật, không bị framework che mờ bản chất, và đưa sản phẩm tiến gần production.',
    enroll: 'Đăng ký khoá học',
    viewCurriculum: 'Xem chương trình học',
    journeyPrefix: 'Từ',
    journeyStart: 'chatbot demo',
    journeyConnector: 'đến',
    journeyEnd: 'LLM product chạy được trong thực tế',
    journeyDescription:
      'Một demo AI có thể được dựng trong vài giờ. Nhưng để biến nó thành một LLM-based application đáng tin cậy, có thể debug, đo lường, kiểm soát chi phí và vận hành với người dùng thật, bạn cần nhiều hơn prompt hay framework.',
    problems: [
      'Vì sao hệ thống hallucinate dù đã “prompt rất kỹ”?',
      'Vì sao output drift sau mỗi lần đổi model/prompt?',
      'Vì sao RAG vẫn trả lời sai dù đã đưa tài liệu vào vector DB?',
      'Vì sao tool calling có thể gọi sai, gọi thừa hoặc gây rủi ro?',
      'Vì sao chi phí và latency tăng vọt?',
    ],
    decisions: [
      'Khi nào chỉ cần prompt, khi nào cần RAG?',
      'Khi nào workflow tốt hơn agent tự do?',
      'Khi nào fine-tuning là đúng hướng — và khi nào là sai hướng?',
      'Khi nào cần structured output, validation và retry thay vì free-form text?',
      'Khi nào cần eval, guardrails, tracing và rollback trước khi nghĩ đến production?',
    ],
  },
  audience: {
    title: 'Khoá học này dành cho ai?',
    subtitle: 'Hệ thống hoá kiến thức dành cho các builder tương lai',
    items: [
      {
        title: 'Software engineer muốn pivot sang LLM Engineering',
        description:
          'Bạn đã biết lập trình, đã từng xây backend/frontend/system, và muốn chuyển sang xây dựng các ứng dụng AI/LLM một cách bài bản, thực tế, có khả năng đi tới production.',
      },
      {
        title: 'Builder muốn tạo sản phẩm LLM-based',
        description:
          'Bạn đang muốn xây chatbot, copilot, automation workflow, document extraction pipeline, knowledge assistant, tutor, analyst hoặc một sản phẩm AI-first nhưng chưa biết bắt đầu từ đâu.',
      },
      {
        title: 'Sinh viên mới ra trường muốn có kinh nghiệm thực chiến',
        description:
          'Bạn có nền tảng lập trình nhưng chưa từng xây một LLM app end-to-end. Khoá học giúp bạn có tư duy hệ thống, project capstone và portfolio thực tế.',
      },
      {
        title: 'Người làm sản phẩm/kỹ thuật muốn hiểu LLM ở production',
        description:
          'Bạn không chỉ muốn dùng AI như một công cụ, mà muốn hiểu cách biến LLM thành một thành phần đáng tin cậy trong hệ thống phần mềm.',
      },
    ],
    preEngineerPrefix:
      '* Với học viên chưa có nền tảng kỹ thuật, có thể theo học khoá ngắn hạn',
    preEngineerName: 'Pre-Engineer',
    preEngineerSuffix: 'trước khi vào chương trình chính.',
  },
  whyCourse: {
    title: 'Vì sao nên học khoá này?',
    subtitle: 'Bản chất kỹ thuật phải hiểu trước. Framework có thể học sau.',
    reasons: [
      {
        title: '1. Học theo hướng production, không chỉ demo',
        description:
          'Rất nhiều LLM app trông ấn tượng ở bản demo nhưng vỡ khi gặp dữ liệu thật, người dùng thật, lỗi thật và chi phí thật. Khoá học đi thẳng vào các vấn đề production:',
        items: [
          'Hallucination & Non-determinism',
          'Context limit & Stale knowledge',
          'Retrieval sai & Prompt injection',
          'Tool misuse & Cost tăng khó kiểm soát',
        ],
      },
      {
        title: '2. Build from scratch — không bị framework che mờ bản chất',
        description:
          "LangChain, LangGraph hay CrewAI đều có giá trị. Nhưng nếu nhảy ngay vào framework, bạn dễ biết 'cách dùng tool' mà không hiểu 'vì sao hệ thống hoạt động'.",
        items: [
          'Tự thiết kế prompt contract',
          'Tự parse và validate structured output',
          'Tự xây RAG / LLM Wiki pipeline nhỏ',
          'Tự xây workflow/state machine đơn giản',
        ],
      },
      {
        title: '3. Tư duy kiến trúc thay vì chỉ học kỹ thuật rời rạc',
        description:
          "LLM app không chỉ là 'gọi API model'. Một hệ thống nghiêm túc cần nhiều layer. Khoá học giúp bạn nhìn LLM application như một hệ thống phần mềm thật sự.",
        items: [
          'API & Orchestration layer',
          'Memory & Context layer',
          'Evaluation & Guardrail layer',
          'Cost/latency control layer',
        ],
      },
      {
        title: '4. Có capstone project và mentoring sau khoá học',
        description:
          'Bạn không chỉ học lý thuyết. Cuối khoá, học viên sẽ chọn một đề tài capstone và xây MVP end-to-end.',
        items: [
          'Xây MVP end-to-end',
          'Mentoring miễn phí 3 tháng sau khoá học',
          'Cải thiện eval & production-readiness',
          'Chuẩn bị portfolio thực chiến',
        ],
      },
    ],
  },
  outcomes: {
    title: 'Bạn sẽ học được gì?',
    subtitle: 'Những kỹ năng thực chiến để đưa LLM vào production.',
    items: [
      'Phân biệt khi nào nên dùng prompting, RAG, tool calling, workflow, fine-tuning hoặc không nên dùng LLM',
      'Hiểu các khái niệm LLM internals: token, context window, sampling, instruction hierarchy, reasoning model',
      'Thiết kế prompt như một interface contract thay vì một đoạn văn “cầu may”',
      'Xây structured output với schema, validation, retry và fallback',
      'Thiết kế RAG pipeline cơ bản và nâng cao',
      'Xây LLM Wiki/Knowledge Base để LLM sử dụng tri thức tốt hơn',
      'Thiết kế tool calling an toàn, có permission và confirmation boundary',
      'Xây agentic workflow có kiểm soát bằng state machine, router, planner, evaluator',
      'Thiết kế memory và context layer cho ứng dụng dài hạn',
      'Xây eval dataset, regression test và LLM-as-judge đúng cách',
      'Thêm guardrails, logging, tracing, replay và audit',
      'Tối ưu cost, latency, model routing và caching',
      'Nhận diện design patterns và anti-patterns trong LLM application',
      'Làm việc hiệu quả với ChatGPT/Codex như một AI pair engineer',
      'Xây harness để test prompt, RAG, workflow và model versions',
      'Hoàn thành một capstone MVP có thể đưa vào portfolio hoặc phát triển tiếp',
    ],
  },
  methodology: {
    title: 'Không chỉ học lý thuyết',
    steps: ['Concept', 'Quiz', 'Lab', 'Resources'],
    paragraphs: [
      'Mỗi bài học được thiết kế theo một flow rõ ràng: học concept cốt lõi, làm quiz/test để kiểm tra mức độ hiểu bài, thực hành qua lab gần với bài toán thực tế, và có resources để tiếp tục đào sâu sau buổi học.',
      'Cách học này giúp học viên không chỉ “nghe hiểu”, mà thật sự luyện được năng lực thiết kế, xây dựng, debug và vận hành LLM application.',
    ],
    sampleLesson: 'Xem thử nội dung bài học mẫu',
  },
  curriculum: {
    title: 'Chương trình học',
    subtitle:
      '8 modules, 24 buổi học trực tiếp. Trọng tâm thực chất, không phụ thuộc framework.',
    sampleLesson: 'Xem thử nội dung bài học mẫu',
    expandModule: 'Mở nội dung',
    collapseModule: 'Thu gọn nội dung',
    modules: [
      {
        title: 'Module 1 — AI/LLM Foundation',
        sessions: [
          {
            name: 'Buổi 1 — AI/LLM Foundation: bức tranh tổng quan',
            description:
              'Hiểu LLM khác biệt thế nào, các nhóm use case, phân tích giới hạn nền tảng.',
          },
          {
            name: 'Buổi 2 — LLM internals vừa đủ dùng cho application engineer',
            description:
              'Token, context window, attention, completion, sampling, reasoning model.',
          },
          {
            name: 'Buổi 3 — LLM ecosystem: API, local hosted, Hugging Face',
            description:
              'Open-weight vs closed, local vs API, trade-off về cost, privacy, latency.',
          },
          {
            name: 'Buổi 4 — RAG vs Fine-tuning vs Prompting vs Tooling',
            description:
              "Chọn đúng chiến lược. Fine-tuning không phải để 'nhét knowledge'.",
          },
        ],
      },
      {
        title: 'Module 2 — Prompt, Structured Output, LLM Contracts',
        sessions: [
          {
            name: 'Buổi 5 — Prompt Engineering thực dụng',
            description:
              'Prompt như một interface contract: role, task, spec, constraints, examples.',
          },
          {
            name: 'Buổi 6 — Structured Output và schema-first design',
            description:
              'JSON schema, typed output, validation, retry, fallback và LLM contract.',
          },
        ],
      },
      {
        title: 'Module 3 — Knowledge Design, RAG, LLM Wiki',
        sessions: [
          {
            name: 'Buổi 7 — RAG căn bản, nhưng đủ dùng',
            description:
              'Vector DB, chunking, retrieval pipeline; grounded answer và citation.',
          },
          {
            name: 'Buổi 8 — RAG nâng cao, cô đọng',
            description:
              'BM25, hybrid search, query rewrite, reranking, context compression.',
          },
          {
            name: 'Buổi 9 — LLM Wiki và Knowledge Base Engineering',
            description:
              'Xây tri thức được cấu trúc hoá: entity, concept, procedure, decision table.',
          },
        ],
      },
      {
        title: 'Module 4 — Tool Calling, Workflow, Memory',
        sessions: [
          {
            name: 'Buổi 10 — Tool Calling và function calling',
            description:
              'Thiết kế tool interface, guarded execution và confirmation.',
          },
          {
            name: 'Buổi 11 — Agentic Workflow',
            description:
              'Planner-executor, router, state machine. Tránh over-agentic architecture.',
          },
          {
            name: 'Buổi 12 — Memory, context engineering và cache',
            description:
              'Conversation history, memory scoping, caching strategies (prompt, prefix).',
          },
        ],
      },
      {
        title: 'Module 5 — Evaluation, Guardrails, Production',
        sessions: [
          {
            name: 'Buổi 13 — Evaluation cho LLM application',
            description:
              'Eval dataset, regression test, LLM-as-judge, metrics (accuracy, cost, latency).',
          },
          {
            name: 'Buổi 14 — Reliability, guardrails và safety',
            description:
              'Input/output guardrails, tracing, replay, audit. Handle hallucination, injection.',
          },
          {
            name: 'Buổi 15 — Cost, latency và model routing',
            description:
              'Cấu trúc chi phí, model routing, fallback, batching, queue.',
          },
        ],
      },
      {
        title: 'Module 6 — Architecture, Patterns, Anti-patterns',
        sessions: [
          {
            name: 'Buổi 16 — LLM application architecture',
            description:
              'API layer, orchestration, prompt, tool, retrieval, eval layer.',
          },
          {
            name: 'Buổi 17 — LLM design patterns và anti-patterns',
            description:
              'Router, planner, state reducer. Anti-patterns: God prompt, God agent.',
          },
        ],
      },
      {
        title: 'Module 7 — Working with AI/Codex, Harness Engineering',
        sessions: [
          {
            name: 'Buổi 18 — Làm việc/vibe code với ChatGPT và Codex',
            description:
              'Dùng AI như pair engineer. Giao việc bằng context, constraints, acceptance.',
          },
          {
            name: 'Buổi 19 — Harness Engineering cơ bản',
            description:
              'Prompt harness, eval harness, simulation harness. Thiết kế harness tối thiểu.',
          },
        ],
      },
      {
        title: 'Module 8 — Applied Case Studies & Capstone',
        sessions: [
          {
            name: 'Buổi 20 — Applied case studies',
            description:
              'Phân tích support assistant, extraction pipeline, coding assistant.',
          },
          {
            name: 'Buổi 21 — Capstone workshop 1',
            description:
              'Chọn đề tài, định hình scope MVP, kiến trúc và data flow.',
          },
          {
            name: 'Buổi 22 — Capstone workshop 2',
            description:
              'Build MVP, logging/tracing, minimal eval cases và demo script.',
          },
          {
            name: 'Buổi 23 — Capstone demo và review',
            description:
              'Review architecture, prompt, retrieval, workflow và cost.',
          },
          {
            name: 'Buổi 24 — Operating LLM systems và mentoring roadmap',
            description:
              'Production rollout checklist. Kế hoạch mentoring 3 tháng.',
          },
        ],
      },
    ],
  },
  instructor: {
    name: 'Tuan Vu',
    role: 'Founder – Ducky AI • AI-First / LLM Application Architect',
    imageAlt: 'Tuan Vu',
    paragraphs: [
      'Tuan Vu có hơn 20 năm kinh nghiệm trong ngành phần mềm, từng tham gia nhiều vai trò từ developer, technical lead đến solution architect. Anh có kinh nghiệm sâu về kiến trúc hệ thống, tích hợp giải pháp, thiết kế sản phẩm phần mềm và hiện tập trung vào việc xây dựng các ứng dụng LLM/AI-first có giá trị thực tiễn.',
      'Trong vai trò Founder của Ducky AI, anh theo đuổi hướng tiếp cận AI-first nhưng không “ảo tưởng AI”: LLM cần được đặt vào kiến trúc phần mềm đúng, có boundary rõ ràng, có eval, có guardrails, có khả năng debug và có thể vận hành trong thực tế.',
      'Triết lý giảng dạy: không học AI bằng cách chạy theo hype hoặc copy framework, mà học bằng cách hiểu bản chất kỹ thuật, tự xây từ gốc, nhìn rõ trade-off và biết cách đưa hệ thống vào production.',
    ],
    quote:
      'Hệ thống AI tốt không chỉ cần model mạnh — mà cần kiến trúc đúng, tri thức đúng, eval nghiêm túc và khả năng vận hành an toàn trong thực tế.',
  },
  enrollment: {
    infoTitle: 'Hình thức & Yêu cầu',
    formats: [
      {
        title: 'Học trực tuyến',
        description:
          '24 buổi học trực tiếp qua Zoom, chia làm 8 modules.',
      },
      {
        title: 'Thực hành liên tục',
        description:
          'Có bài thực hành trong từng module và 1 capstone project cuối khoá.',
      },
      {
        title: 'Mentoring dài hạn',
        description:
          'Giảng viên hỗ trợ 1:1 trong quá trình học và mentoring miễn phí thêm 3 tháng sau khi kết thúc khoá học.',
      },
    ],
    requirementsTitle: 'Yêu cầu đầu vào',
    requirements:
      'Học viên nên có nền tảng cơ bản về lập trình. Bạn không nhất thiết phải là AI/ML engineer. Khoá học được thiết kế cho application engineer và builder muốn xây dựng ứng dụng LLM thực tế.',
    requirementsNote:
      '* Với học viên chưa có nền tảng kỹ thuật, có thể theo học khoá ngắn hạn Pre-Engineer trước khi tham gia chương trình chính.',
    form: {
      title: 'Thông tin đăng ký',
      subtitle: 'Điền thông tin để tham gia khoá học',
      closeLabel: 'Đóng form đăng ký',
      successTitle: 'Đăng ký thành công!',
      successMessage:
        'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để hoàn tất thủ tục.',
      back: 'Quay lại',
      subject: 'Đăng ký mới từ khoá học LLM Engineer',
      honeypot: 'Đừng điền vào trường này nếu bạn là người',
      nameLabel: 'Họ và tên *',
      namePlaceholder: 'Nhập họ và tên...',
      emailLabel: 'Email *',
      emailPlaceholder: 'Địa chỉ email...',
      phoneLabel: 'Số điện thoại *',
      phonePlaceholder: 'Số điện thoại liên hệ...',
      noteLabel: 'Ghi chú thêm',
      notePlaceholder: 'Bạn có câu hỏi hay mong muốn gì cho khoá học?',
      captchaNotConfigured: 'Chưa cấu hình CAPTCHA.',
      submitting: 'Đang gửi...',
      submit: 'Gửi đăng ký',
    },
    pricing: {
      title: 'Đăng ký khoá học',
      subtitle: 'Bắt đầu xây dựng thế hệ ứng dụng AI-first tiếp theo.',
      originalPrice: '20.000.000 VNĐ',
      price: '16.000.000',
      currency: 'VNĐ',
      offer: 'Ưu đãi hiện tại',
      benefits: [
        'Nền tảng vững chắc về LLM application engineering',
        'Khả năng tự thiết kế và xây LLM-based app end-to-end',
        'Capstone MVP cho portfolio',
        'Tư duy production-readiness thực chiến',
        'Mentoring 3 tháng sau khoá học',
      ],
      enrollNow: 'Đăng ký ngay',
    },
    errors: {
      captchaExpired:
        'Phiên xác minh CAPTCHA đã hết hạn. Vui lòng xác minh lại.',
      missingSiteKey: 'Chưa cấu hình VITE_TURNSTILE_SITE_KEY.',
      captchaRequired: 'Vui lòng hoàn tất xác minh CAPTCHA.',
      invalidEmail: 'Email không hợp lệ. Vui lòng kiểm tra lại.',
      invalidPhone:
        'Số điện thoại không hợp lệ. Vui lòng điền từ 8-15 số (có thể chứa mã vùng bắt đầu bằng +).',
      missingScriptUrl:
        'Vui lòng cấu hình VITE_GOOGLE_SCRIPT_URL trong file .env hoặc thay URL trực tiếp vào code (ở Enrollment.tsx).',
      network: 'Không thể kết nối. Vui lòng kiểm tra lại mạng.',
      captchaVerification:
        'Không thể xác minh CAPTCHA ({code}). Vui lòng thử lại.',
      captchaLoad:
        'Không thể tải CAPTCHA. Vui lòng kiểm tra kết nối và thử lại.',
    },
  },
  footer: {
    title: 'LLM Engineer Thực Chiến',
    lines: [
      'Không chỉ học cách gọi model.',
      'Không chỉ học cách viết prompt.',
      'Không chỉ học cách dùng framework.',
    ],
    conclusion:
      'Học cách xây dựng hệ thống LLM thật sự — từ bản chất kỹ thuật đến production.',
    copyright: 'Ducky AI. Đã đăng ký bản quyền.',
  },
  scrollToTop: 'Về đầu trang',
} as const;

export default vi;
