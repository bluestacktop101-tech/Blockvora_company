import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Rocket,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCallDialog, bookCallClassName } from "@/components/marketing/BookCallDialog";
import { siteConfig } from "@/config/site";
import { homeSlides } from "@/content/slides";
import { cn } from "@/lib/utils";

const accent = "text-blue-700";
const muted = "text-zinc-600";

const industries = [
  "Capital Markets",
  "Healthcare",
  "Real Estate",
  "Enterprise",
  "Finance",
  "Industry",
];

const services = [
  {
    title: "AI Solutions",
    description: "Models, retrieval systems, and automation built around your documents and workflows.",
    to: "/solutions/$slug" as const,
    slug: "ai-development",
    icon: BrainCircuit,
  },
  {
    title: "Web3 & Blockchain Solutions",
    description: "Networks, wallets, and applications designed for institutional operations.",
    to: "/solutions/$slug" as const,
    slug: "blockchain",
    icon: Blocks,
  },
  {
    title: "Security Audits & Cybersecurity",
    description: "Smart-contract review, threat modeling, and controls that hold up after launch.",
    to: "/solutions/$slug" as const,
    slug: "smart-contracts",
    icon: ShieldCheck,
  },
  {
    title: "Product & MVP Development",
    description: "From a scoped concept to a market-ready product with an architecture that can grow.",
    to: "/services" as const,
    icon: Rocket,
  },
  {
    title: "Technical Leadership",
    description: "Senior technology guidance for teams that need direction without a full-time executive hire.",
    to: "/about" as const,
    icon: Users,
  },
  {
    title: "Technical Due Diligence",
    description: "Code, architecture, security, and delivery risk reviewed for investors and buyers.",
    to: "/case-studies" as const,
    icon: Search,
  },
  {
    title: "Consulting & Strategy",
    description: "Roadmaps for technology adoption, architecture, and the first production release.",
    to: "/contact" as const,
    icon: Compass,
  },
];

const steps = [
  {
    title: "Discover",
    summary: "Clarify goals & gaps",
    detail: "We map the outcome, the constraints, and the risks that will decide the architecture.",
  },
  {
    title: "Plan",
    summary: "Tech roadmap with ROI",
    detail: "A sequenced plan that ties stack choices to cost, compliance, and a measurable first release.",
  },
  {
    title: "Prototype",
    summary: "Clickable demo in 2 weeks",
    detail: "A working slice stakeholders can click, grounded in real data shapes rather than a slide mock.",
  },
  {
    title: "Launch",
    summary: "Secure, compliant deployment",
    detail: "Production rollout with access control, monitoring, and an operator path your team can run.",
  },
  {
    title: "Grow",
    summary: "Iterative features & support",
    detail: "Evaluation, incremental features, and support after go-live so the system keeps earning its place.",
  },
];

const toolkit = [
  {
    name: "PyTorch",
    description: "Fast prototyping and evaluation for models that have to leave the notebook.",
  },
  {
    name: "LangChain",
    description: "LLM pipelines, agent workflows, and retrieval systems tied to your corpus.",
  },
  {
    name: "Ethereum & Solana",
    description: "Networks for smart contracts, settlement, and controlled on-chain workflows.",
  },
  {
    name: "Solidity & Rust",
    description: "Contract and protocol code with tests, fuzzing, and review before deploy.",
  },
  {
    name: "PostgreSQL",
    description: "System-of-record data, vectors, and audit trails security teams can inspect.",
  },
  {
    name: "Kubernetes",
    description: "Isolated environments, controlled rollouts, and day-two operations.",
  },
];

const stories = [
  {
    quote:
      "Secondary transfers that used to sit in email now settle with eligibility checks still in the path. Operators can see every step.",
    org: "Global asset manager",
    focus: "Capital markets",
  },
  {
    quote:
      "Clinicians got summaries they could verify. Citations stayed attached to the note, and physicians remained in control of the recommendation.",
    org: "Regional health system",
    focus: "Healthcare",
  },
  {
    quote:
      "The offering, the legal ledger, and investor onboarding finally lived in one system. Distribution stopped depending on spreadsheets.",
    org: "Real estate investment platform",
    focus: "Real estate",
  },
  {
    quote:
      "The assistant answers from approved procedures, respects who is allowed to see what, and gives the team a way to escalate when it should not guess.",
    org: "Enterprise operations team",
    focus: "Enterprise AI",
  },
];

const faqs = [
  {
    question: "What exactly does Blockvora do?",
    answer:
      "Blockvora is an AI and Web3 company based in Zug, Switzerland. We design, build, secure, and scale digital products — from the first working slice through launch and ongoing improvement. The focus is production systems: retrieval that cites sources, blockchain that clears operational review, and software teams can run after we leave.",
  },
  {
    question: "What services does Blockvora offer?",
    answer:
      "AI solutions (retrieval, private deployment, evaluation), Web3 and blockchain systems, smart-contract development and security review, product and MVP engineering, technical leadership, technical due diligence, and consulting on architecture and delivery. Each engagement starts from the constraint that will decide the design, not from a generic package.",
  },
  {
    question: "What does a typical project look like?",
    answer:
      "Discovery clarifies goals, ROI, and risk. Strategy locks the roadmap and stack. A prototype validates the riskiest workflow. Launch covers production deployment, access control, and monitoring. After that we stay for evaluation, feature work, and security maintenance.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "Startups, mid-market companies, and enterprises in capital markets, healthcare, real estate, finance, and other domains where data access and trust rules are part of the product.",
  },
  {
    question: "Do you offer security and compliance reviews?",
    answer:
      "Yes. Smart-contract testing and audit coordination, threat models, infrastructure baselines, and privacy reviews for programs that have to satisfy GDPR-style and internal security requirements.",
  },
  {
    question: "How do you support investors with due diligence?",
    answer:
      "We review code, architecture, scalability, and security, then write a clear view of delivery risk and what it would take to operate the system. Portfolio write-ups on this site show the shape of that work.",
  },
  {
    question: "How can I book a discovery call?",
    answer: `Book a strategy call from this page or email ${siteConfig.email}. We respond within one business day.`,
  },
  {
    question: "Where is Blockvora based, and do you work internationally?",
    answer: `We are based in ${siteConfig.address}. Delivery is remote-first, with projects across Europe and North America and on-site workshops when the problem needs them.`,
  },
];

function MotionMovie({
  src,
  still,
  alt,
  className,
}: {
  src: string;
  still: string;
  alt: string;
  className?: string;
}) {
  return (
    <>
      <video
        className={cn("media-motion", className)}
        autoPlay
        muted
        loop
        playsInline
        poster={still}
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
      </video>
      <img src={still} alt="" className={cn("media-still", className)} />
    </>
  );
}

function ServiceLink({
  service,
  className,
  children,
}: {
  service: (typeof services)[number];
  className?: string;
  children: ReactNode;
}) {
  if (service.to === "/solutions/$slug") {
    return (
      <Link to="/solutions/$slug" params={{ slug: service.slug }} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={service.to} className={className}>
      {children}
    </Link>
  );
}

export function AgencyHome() {
  const [step, setStep] = useState(0);
  const [story, setStory] = useState(0);
  const [processPaused, setProcessPaused] = useState(false);
  const [storiesPaused, setStoriesPaused] = useState(false);
  const [slide, setSlide] = useState(0);
  const activeStep = steps[step] ?? steps[0];
  const activeStory = stories[story] ?? stories[0];

  useEffect(() => {
    if (processPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setStep((value) => (value + 1) % steps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [processPaused]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setSlide((value) => (value + 1) % homeSlides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (storiesPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setStory((value) => (value + 1) % stories.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [storiesPaused]);

  return (
    <div className="bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200">
        {homeSlides.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-1000",
              index === slide ? "opacity-[0.14]" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/75" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="anim-rise">
            <p className={cn("text-sm font-medium", accent)}>AI & Web3 company · {siteConfig.address}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              We build AI & Web3 products that drive revenue.
            </h1>
            <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", muted)}>
              Strategy, development, launch and security — delivered by one seasoned partner.
            </p>
            <div className="mt-8">
              <BookCallDialog>
                <button type="button" className={bookCallClassName()}>
                  Book a free strategy call
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </BookCallDialog>
            </div>
          </div>
          <div className="anim-float">
            <MotionMovie
              src="/movies/studio.mp4"
              still="/movies/studio-still.png"
              alt="Looping film of the studio and a working session"
              className="aspect-[4/3] w-full rounded-3xl border border-zinc-200 object-cover shadow-[0_18px_50px_rgb(24_24_27/0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-zinc-200 bg-zinc-50" aria-label="Industries">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className={cn("text-center text-sm font-medium tracking-wide", muted)}>
            Startups and enterprises build with us
          </h2>
          <div className="relative mt-6 overflow-hidden">
            <ul className="animate-marquee flex w-max items-center gap-12">
              {[0, 1].map((copy) =>
                industries.map((name) => (
                  <li
                    key={`${name}-${copy}`}
                    aria-hidden={copy === 1 || undefined}
                    className="text-sm font-semibold tracking-tight text-zinc-400 sm:text-base"
                  >
                    {name}
                  </li>
                )),
              )}
            </ul>
          </div>
          <p className="mt-6 text-center">
            <Link
              to="/case-studies"
              className={cn("text-sm font-medium underline-offset-4 hover:underline", accent)}
            >
              View full portfolio
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200">
          <img
            src="/slides/slide-code-photo.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-white/95 to-white/80" />
          <div className="relative grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className={cn("text-sm font-medium", accent)}>AI solutions</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Data-driven AI in 30 days.
              </h2>
              <p className={cn("mt-4 max-w-xl text-base leading-relaxed", muted)}>
                Retrieval-augmented systems that answer from your documents, with citations and
                access control — not a generic chatbot.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/solutions/$slug"
                  params={{ slug: "ai-development" }}
                  className={bookCallClassName()}
                >
                  Build your custom RAG AI
                </Link>
                <Link
                  to="/blog/$slug"
                  params={{ slug: "production-rag-for-regulated-data" }}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                >
                  How RAG delivers results
                </Link>
              </div>
            </div>
            <MotionMovie
              src="/movies/ai-build.mp4"
              still="/movies/ai-build-still.png"
              alt="Looping film of engineers and code, with a signal meter and a progress ring"
              className="h-full min-h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Service overview
              </h2>
              <p className="mt-3 max-w-xl text-zinc-600">
                One partner for the work that usually gets split across agencies, auditors, and a
                freelance bench.
              </p>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              View all services
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.title} className="anim-rise" style={{ animationDelay: `${index * 70}ms` }}>
                <ServiceLink
                  service={service}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-300"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <service.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </ServiceLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="process"
        className="border-t border-zinc-200"
        onMouseEnter={() => setProcessPaused(true)}
        onMouseLeave={() => setProcessPaused(false)}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
            <BookCallDialog>
              <button type="button" className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline">
                Schedule a workshop
              </button>
            </BookCallDialog>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-5">
            {steps.map((item, index) => {
              const selected = index === step;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setStep(index)}
                    aria-pressed={selected}
                    className={cn(
                      "flex h-full w-full flex-col rounded-2xl border p-4 text-left transition-colors",
                      selected
                        ? "border-blue-600 bg-blue-50"
                        : "border-zinc-200 bg-white hover:border-zinc-300",
                    )}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                      <span className="grid size-6 place-items-center rounded-full bg-[linear-gradient(120deg,oklch(0.78_0.14_205),oklch(0.6_0.23_300))] text-white">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      {index + 1}
                    </span>
                    <span className="mt-3 font-semibold tracking-tight">{item.title}</span>
                    <span className="mt-1 text-sm text-zinc-600">{item.summary}</span>
                  </button>
                </li>
              );
            })}
          </ol>
          {activeStep ? (
            <p key={activeStep.title} className="anim-swap mt-6 max-w-3xl text-base leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-950">Phase: {activeStep.title}. </span>
              {activeStep.detail}
            </p>
          ) : null}
        </div>
      </section>

      <section id="toolkit" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Our technology toolkit
            </h2>
            <p className="mt-3 text-zinc-600">
              Technology-agnostic — we choose the tool that fits the risk, the team, and the return.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((tool, index) => (
              <li
                key={tool.name}
                className="anim-rise rounded-2xl border border-zinc-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <h3 className="text-lg font-semibold tracking-tight">{tool.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{tool.description}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/technologies"
            className="mt-8 inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
          >
            See the full stack
          </Link>
        </div>
      </section>

      <section
        id="stories"
        className="border-t border-zinc-200"
        onMouseEnter={() => setStoriesPaused(true)}
        onMouseLeave={() => setStoriesPaused(false)}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Hear from the work
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous story"
                onClick={() => setStory((value) => (value - 1 + stories.length) % stories.length)}
                className="grid size-10 place-items-center rounded-full border border-zinc-300 hover:bg-zinc-50"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={() => setStory((value) => (value + 1) % stories.length)}
                className="grid size-10 place-items-center rounded-full border border-zinc-300 hover:bg-zinc-50"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
          {activeStory ? (
            <figure key={activeStory.org} className="anim-swap mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
              <blockquote className="max-w-3xl text-xl leading-relaxed tracking-tight text-zinc-950 sm:text-2xl">
                “{activeStory.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-zinc-600">
                <span className="font-semibold text-zinc-950">{activeStory.org}</span>
                <span className="mx-2 text-zinc-300">/</span>
                {activeStory.focus}
              </figcaption>
            </figure>
          ) : null}
          <div className="mt-4 flex gap-2" role="tablist" aria-label="Client stories">
            {stories.map((item, index) => (
              <button
                key={item.org}
                type="button"
                role="tab"
                aria-selected={index === story}
                aria-label={item.org}
                onClick={() => setStory(index)}
                className={cn(
                  "h-1.5 rounded-full",
                  index === story ? "w-8 bg-blue-700" : "w-4 bg-zinc-300",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About AI & Web3 services
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-zinc-200">
                <AccordionTrigger className="py-5 text-base font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
