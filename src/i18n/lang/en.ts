import type { Translations } from '../types';

const en = {
  meta: {
    title: 'Hands-On LLM Engineer',
  },
  language: {
    switcherLabel: 'Choose language',
    vietnamese: 'Vietnamese',
    english: 'English',
    vietnameseShort: 'VI',
    englishShort: 'EN',
    vietnameseFlag: '🇻🇳',
    englishFlag: '🇬🇧',
  },
  header: {
    brand: 'LLME',
    audience: 'Who it is for',
    whyCourse: 'Why this course',
    curriculum: 'Curriculum',
    sampleLesson: 'Sample lesson',
    enroll: 'Enroll',
    homeLabel: 'Back to top',
  },
  hero: {
    badge: 'Production-Ready LLM Course',
    title: 'LLM Engineer',
    titleHighlight: 'Hands-On Bootcamp',
    subtitle: 'Build LLM apps from first principles to production',
    description:
      'This course goes beyond writing prompts and assembling frameworks. You will learn how a real LLM application is designed, built, evaluated, and operated—so you can manage technical trade-offs, understand what frameworks abstract away, and move products toward production.',
    enroll: 'Enroll in the course',
    viewCurriculum: 'View curriculum',
    journeyPrefix: 'From a',
    journeyStart: 'chatbot demo',
    journeyConnector: 'to an',
    journeyEnd: 'LLM product that works in the real world',
    journeyDescription:
      'An AI demo can be built in a few hours. Turning it into a reliable LLM application that can be debugged, measured, cost-controlled, and operated for real users takes much more than prompts or frameworks.',
    problems: [
      'Why does the system hallucinate even with a carefully written prompt?',
      'Why does output drift whenever the model or prompt changes?',
      'Why can RAG still answer incorrectly after documents are added to a vector database?',
      'Why can tool calling invoke the wrong tool, call too often, or create risks?',
      'Why do cost and latency suddenly spike?',
    ],
    decisions: [
      'When is a prompt enough, and when do you need RAG?',
      'When is a workflow better than a free-form agent?',
      'When is fine-tuning the right approach—and when is it not?',
      'When should you use structured output, validation, and retries instead of free-form text?',
      'When do you need evaluation, guardrails, tracing, and rollback before going to production?',
    ],
  },
  audience: {
    title: 'Who is this course for?',
    subtitle: 'A structured learning path for the next generation of builders',
    items: [
      {
        title: 'Software engineers moving into LLM engineering',
        description:
          'You already know how to code and have built backend, frontend, or systems software. Now you want to build practical AI/LLM applications systematically and take them to production.',
      },
      {
        title: 'Builders creating LLM-based products',
        description:
          'You want to build a chatbot, copilot, automation workflow, document extraction pipeline, knowledge assistant, tutor, analyst, or another AI-first product but do not know where to start.',
      },
      {
        title: 'New graduates seeking hands-on experience',
        description:
          'You have a programming foundation but have not built an end-to-end LLM app. The course gives you systems thinking, a capstone project, and a practical portfolio.',
      },
      {
        title: 'Product and technical professionals learning production LLMs',
        description:
          'You want to go beyond using AI as a tool and understand how to make LLMs a reliable component of a software system.',
      },
    ],
    preEngineerPrefix:
      '* Learners without a technical foundation can first take the short',
    preEngineerName: 'Pre-Engineer',
    preEngineerSuffix: 'course before joining the main program.',
  },
  whyCourse: {
    title: 'Why take this course?',
    subtitle: 'Understand the engineering fundamentals first. Learn frameworks later.',
    reasons: [
      {
        title: '1. Learn for production, not just demos',
        description:
          'Many LLM apps look impressive in demos but break with real data, real users, real failures, and real costs. This course goes directly into production concerns:',
        items: [
          'Hallucination & non-determinism',
          'Context limits & stale knowledge',
          'Retrieval failures & prompt injection',
          'Tool misuse & uncontrolled costs',
        ],
      },
      {
        title: '2. Build from scratch without hiding behind frameworks',
        description:
          'LangChain, LangGraph, and CrewAI all have value. But starting with frameworks can teach you how to use tools without understanding why the system works.',
        items: [
          'Design prompt contracts yourself',
          'Parse and validate structured output',
          'Build a small RAG / LLM Wiki pipeline',
          'Build a simple workflow/state machine',
        ],
      },
      {
        title: '3. Develop architectural thinking, not isolated techniques',
        description:
          'An LLM app is more than a model API call. A serious system needs multiple layers. This course teaches you to view an LLM application as a real software system.',
        items: [
          'API & orchestration layer',
          'Memory & context layer',
          'Evaluation & guardrail layer',
          'Cost/latency control layer',
        ],
      },
      {
        title: '4. Complete a capstone with post-course mentoring',
        description:
          'You will do more than study theory. By the end, you will choose a capstone topic and build an end-to-end MVP.',
        items: [
          'Build an end-to-end MVP',
          'Three months of free mentoring',
          'Improve evaluation & production readiness',
          'Build a practical portfolio',
        ],
      },
    ],
  },
  outcomes: {
    title: 'What will you learn?',
    subtitle: 'Practical skills for bringing LLM applications into production.',
    items: [
      'Decide when to use prompting, RAG, tool calling, workflows, fine-tuning—or no LLM at all',
      'Understand LLM internals: tokens, context windows, sampling, instruction hierarchy, and reasoning models',
      'Design prompts as interface contracts instead of hopeful prose',
      'Build structured output with schemas, validation, retries, and fallbacks',
      'Design basic and advanced RAG pipelines',
      'Build an LLM Wiki/Knowledge Base that makes knowledge easier for LLMs to use',
      'Design safe tool calling with permission and confirmation boundaries',
      'Build controlled agentic workflows using state machines, routers, planners, and evaluators',
      'Design memory and context layers for long-running applications',
      'Build evaluation datasets, regression tests, and LLM-as-judge systems correctly',
      'Add guardrails, logging, tracing, replay, and auditability',
      'Optimize cost, latency, model routing, and caching',
      'Recognize design patterns and anti-patterns in LLM applications',
      'Work effectively with ChatGPT/Codex as an AI pair engineer',
      'Build harnesses to test prompts, RAG, workflows, and model versions',
      'Complete a capstone MVP for your portfolio or continued development',
    ],
  },
  methodology: {
    title: 'More than theory',
    steps: ['Concept', 'Quiz', 'Lab', 'Resources'],
    paragraphs: [
      'Each lesson follows a clear flow: learn the core concept, use quizzes and tests to check understanding, work through a lab based on a realistic problem, and continue exploring with curated resources.',
      'This approach moves learners beyond passive understanding and develops the ability to design, build, debug, and operate LLM applications.',
    ],
    sampleLesson: 'Explore a sample lesson',
  },
  curriculum: {
    title: 'Curriculum',
    subtitle:
      '8 modules and 24 live sessions, focused on fundamentals rather than a specific framework.',
    sampleLesson: 'Explore a sample lesson',
    expandModule: 'Expand module',
    collapseModule: 'Collapse module',
    modules: [
      {
        title: 'Module 1 — AI/LLM Foundations',
        sessions: [
          {
            name: 'Session 1 — AI/LLM Foundations: the big picture',
            description:
              'Understand what makes LLMs different, major use cases, and foundational limitations.',
          },
          {
            name: 'Session 2 — Practical LLM internals for application engineers',
            description:
              'Tokens, context windows, attention, completion, sampling, and reasoning models.',
          },
          {
            name: 'Session 3 — The LLM ecosystem: APIs, local hosting, and Hugging Face',
            description:
              'Open-weight vs. closed models, local vs. API, and cost, privacy, and latency trade-offs.',
          },
          {
            name: 'Session 4 — RAG vs. fine-tuning vs. prompting vs. tooling',
            description:
              'Choose the right strategy. Fine-tuning is not a way to stuff knowledge into a model.',
          },
        ],
      },
      {
        title: 'Module 2 — Prompts, Structured Output, and LLM Contracts',
        sessions: [
          {
            name: 'Session 5 — Practical prompt engineering',
            description:
              'Treat prompts as interface contracts: role, task, specification, constraints, and examples.',
          },
          {
            name: 'Session 6 — Structured output and schema-first design',
            description:
              'JSON Schema, typed output, validation, retries, fallbacks, and LLM contracts.',
          },
        ],
      },
      {
        title: 'Module 3 — Knowledge Design, RAG, and LLM Wikis',
        sessions: [
          {
            name: 'Session 7 — Practical RAG fundamentals',
            description:
              'Vector databases, chunking, retrieval pipelines, grounded answers, and citations.',
          },
          {
            name: 'Session 8 — Focused advanced RAG',
            description:
              'BM25, hybrid search, query rewriting, reranking, and context compression.',
          },
          {
            name: 'Session 9 — LLM Wikis and Knowledge Base Engineering',
            description:
              'Build structured knowledge using entities, concepts, procedures, and decision tables.',
          },
        ],
      },
      {
        title: 'Module 4 — Tool Calling, Workflows, and Memory',
        sessions: [
          {
            name: 'Session 10 — Tool calling and function calling',
            description:
              'Design tool interfaces, guarded execution, and confirmation boundaries.',
          },
          {
            name: 'Session 11 — Agentic workflows',
            description:
              'Planner-executor, routers, and state machines. Avoid over-agentic architectures.',
          },
          {
            name: 'Session 12 — Memory, context engineering, and caching',
            description:
              'Conversation history, memory scoping, and prompt and prefix caching strategies.',
          },
        ],
      },
      {
        title: 'Module 5 — Evaluation, Guardrails, and Production',
        sessions: [
          {
            name: 'Session 13 — Evaluation for LLM applications',
            description:
              'Evaluation datasets, regression tests, LLM-as-judge, and accuracy, cost, and latency metrics.',
          },
          {
            name: 'Session 14 — Reliability, guardrails, and safety',
            description:
              'Input/output guardrails, tracing, replay, auditing, hallucinations, and injection attacks.',
          },
          {
            name: 'Session 15 — Cost, latency, and model routing',
            description:
              'Cost structures, model routing, fallbacks, batching, and queues.',
          },
        ],
      },
      {
        title: 'Module 6 — Architecture, Patterns, and Anti-patterns',
        sessions: [
          {
            name: 'Session 16 — LLM application architecture',
            description:
              'API, orchestration, prompt, tool, retrieval, and evaluation layers.',
          },
          {
            name: 'Session 17 — LLM design patterns and anti-patterns',
            description:
              'Routers, planners, and state reducers. Anti-patterns: God prompts and God agents.',
          },
        ],
      },
      {
        title: 'Module 7 — Working with AI/Codex and Harness Engineering',
        sessions: [
          {
            name: 'Session 18 — Working and vibe coding with ChatGPT and Codex',
            description:
              'Use AI as a pair engineer. Delegate with context, constraints, and acceptance criteria.',
          },
          {
            name: 'Session 19 — Harness Engineering fundamentals',
            description:
              'Prompt, evaluation, and simulation harnesses. Design the minimum viable harness.',
          },
        ],
      },
      {
        title: 'Module 8 — Applied Case Studies & Capstone',
        sessions: [
          {
            name: 'Session 20 — Applied case studies',
            description:
              'Analyze a support assistant, extraction pipeline, and coding assistant.',
          },
          {
            name: 'Session 21 — Capstone workshop 1',
            description:
              'Choose a topic and define the MVP scope, architecture, and data flow.',
          },
          {
            name: 'Session 22 — Capstone workshop 2',
            description:
              'Build the MVP with logging, tracing, minimal evaluation cases, and a demo script.',
          },
          {
            name: 'Session 23 — Capstone demo and review',
            description:
              'Review architecture, prompts, retrieval, workflows, and cost.',
          },
          {
            name: 'Session 24 — Operating LLM systems and the mentoring roadmap',
            description:
              'Production rollout checklist and a three-month mentoring plan.',
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
      'Tuan Vu has more than 20 years of experience in the software industry, working as a developer, technical lead, and solution architect. He has deep experience in system architecture, solution integration, and software product design, and now focuses on building practical LLM and AI-first applications.',
      'As the founder of Ducky AI, he pursues an AI-first approach without falling for AI hype. LLMs need the right software architecture, clear boundaries, evaluation, guardrails, debuggability, and real-world operability.',
      'His teaching philosophy is to avoid chasing hype or copying frameworks. Instead, learners understand the engineering fundamentals, build from scratch, evaluate trade-offs, and learn how to take systems into production.',
    ],
    quote:
      'A strong AI system needs more than a powerful model—it needs the right architecture, the right knowledge, rigorous evaluation, and safe real-world operation.',
  },
  enrollment: {
    infoTitle: 'Format & Requirements',
    formats: [
      {
        title: 'Live online learning',
        description:
          '24 live Zoom sessions organized into 8 modules.',
      },
      {
        title: 'Continuous practice',
        description:
          'Hands-on work in every module and one final capstone project.',
      },
      {
        title: 'Long-term mentoring',
        description:
          'One-on-one instructor support during the course plus three months of free mentoring after it ends.',
      },
    ],
    requirementsTitle: 'Prerequisites',
    requirements:
      'Learners should have basic programming skills. You do not need to be an AI/ML engineer. The course is designed for application engineers and builders who want to create practical LLM applications.',
    requirementsNote:
      '* Learners without a technical foundation can take the short Pre-Engineer course before joining the main program.',
    form: {
      title: 'Enrollment details',
      subtitle: 'Enter your information to join the course',
      closeLabel: 'Close enrollment form',
      successTitle: 'Enrollment successful!',
      successMessage:
        'We will contact you shortly to complete the enrollment process.',
      back: 'Go back',
      subject: 'New LLM Engineer course enrollment',
      honeypot: 'Leave this field empty if you are human',
      nameLabel: 'Full name *',
      namePlaceholder: 'Enter your full name...',
      emailLabel: 'Email *',
      emailPlaceholder: 'Email address...',
      phoneLabel: 'Phone number *',
      phonePlaceholder: 'Contact phone number...',
      noteLabel: 'Additional notes',
      notePlaceholder: 'What questions or expectations do you have for the course?',
      captchaNotConfigured: 'CAPTCHA is not configured.',
      submitting: 'Sending...',
      submit: 'Submit enrollment',
    },
    pricing: {
      title: 'Enroll in the course',
      subtitle: 'Start building the next generation of AI-first applications.',
      originalPrice: 'VND 20,000,000',
      price: '16,000,000',
      currency: 'VND',
      offer: 'Current offer',
      benefits: [
        'A strong foundation in LLM application engineering',
        'The ability to design and build an end-to-end LLM-based app',
        'A capstone MVP for your portfolio',
        'Practical production-readiness thinking',
        'Three months of post-course mentoring',
      ],
      enrollNow: 'Enroll now',
    },
    errors: {
      captchaExpired:
        'Your CAPTCHA verification has expired. Please verify again.',
      missingSiteKey: 'VITE_TURNSTILE_SITE_KEY is not configured.',
      captchaRequired: 'Please complete the CAPTCHA verification.',
      invalidEmail: 'The email address is invalid. Please check it and try again.',
      invalidPhone:
        'The phone number is invalid. Enter 8–15 digits, optionally starting with a + country code.',
      missingScriptUrl:
        'Configure VITE_GOOGLE_SCRIPT_URL in the .env file or update the URL in Enrollment.tsx.',
      network: 'Unable to connect. Please check your network and try again.',
      captchaVerification:
        'Unable to verify CAPTCHA ({code}). Please try again.',
      captchaLoad:
        'Unable to load CAPTCHA. Check your connection and try again.',
    },
  },
  footer: {
    title: 'Hands-On LLM Engineer',
    lines: [
      'Learn more than model API calls.',
      'Learn more than prompt writing.',
      'Learn more than frameworks.',
    ],
    conclusion:
      'Learn to build real LLM systems—from engineering fundamentals to production.',
    copyright: 'Ducky AI. All rights reserved.',
  },
  scrollToTop: 'Back to top',
} satisfies Translations;

export default en;
