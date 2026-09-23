import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FlaskConical,
  Menu,
  Phone,
  ShieldCheck,
  TerminalSquare,
  X,
} from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/snit-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SN Cyber Academy | Cybersecurity Training Institute" },
      {
        name: "description",
        content:
          "SN Cyber Academy offers practical Cybersecurity, Ethical Hacking, SOC Analyst and IT Security training.",
      },
      { property: "og:title", content: "SN Cyber Academy | Cybersecurity Training Institute" },
      {
        property: "og:description",
        content: "Practical, career-focused cybersecurity and ethical hacking training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const courseTopics = [
  "Cybersecurity Fundamentals",
  "Networking & Security",
  "Linux & Windows Security",
  "Ethical Hacking",
  "Web Application Security",
  "SOC & SIEM Operations",
  "Vulnerability Assessment",
  "Hands-on Security Labs",
];

const modules = [
  "Introduction to Cybersecurity",
  "Networking Fundamentals",
  "Kali Linux Fundamentals",
  "Windows & Active Directory",
  "Reconnaissance & OSINT",
  "Scanning & Enumeration",
  "Vulnerability Analysis",
  "Exploitation & Metasploit",
  "Post Exploitation",
  "Wireless Security",
  "Web Application Security",
  "SOC & SIEM Operations",
];

const benefits = [
  {
    icon: FlaskConical,
    title: "Hands-on Labs",
    text: "Practice cybersecurity concepts using real security tools and controlled lab environments.",
  },
  {
    icon: TerminalSquare,
    title: "Security Tools",
    text: "Work with tools used across reconnaissance, vulnerability assessment and security operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Focused",
    text: "Build practical knowledge relevant to cybersecurity and SOC-related roles.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-md">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logoAsset.url} alt="SNIT logo" className="h-11 w-11 rounded-sm object-contain" />
            <span className="text-lg font-bold text-foreground sm:text-xl">
              SN <span className="text-primary">Cyber Academy</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#course">Course</a>
            <a className="nav-link" href="#modules">Modules</a>
            <a className="nav-link" href="#trainer">Trainer</a>
            <a className="btn-primary btn-small" href="tel:+919640059999">
              <Phone className="size-4" /> Contact
            </a>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-header px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {["home", "course", "modules", "trainer"].map((item) => (
                <a key={item} href={`#${item}`} className="mobile-nav-link" onClick={closeMenu}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <ChevronRight className="size-4" />
                </a>
              ))}
              <a href="tel:+919640059999" className="btn-primary mt-3 justify-center" onClick={closeMenu}>
                <Phone className="size-4" /> Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-grid relative flex min-h-[calc(100svh-76px)] items-center border-b border-border py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="eyebrow"><ShieldCheck className="size-4" /> Practical Cybersecurity Training</div>
              <h1 className="mt-7 text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                Build Your Career in <span className="text-primary">Cybersecurity</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Learn cybersecurity, ethical hacking, SOC operations, vulnerability assessment and security tools through practical, hands-on training.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#course" className="btn-primary">Explore Course <ArrowRight className="size-4" /></a>
                <a href="tel:+919640059999" className="btn-secondary"><Phone className="size-4" /> Contact Us</a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Real-world labs</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Industry-led training</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Career-focused skills</span>
              </div>
            </div>

            <div className="relative hidden justify-self-end lg:block" aria-hidden="true">
              <div className="brand-emblem">
                <img src={logoAsset.url} alt="" className="h-48 w-48 object-contain" />
              </div>
              <div className="brand-orbit brand-orbit-one" />
              <div className="brand-orbit brand-orbit-two" />
            </div>
          </div>
        </section>

        <section id="course" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading label="Featured program" title="Cybersecurity Professional Program" text="Learn security concepts through practical labs and real-world tools." />
            <div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[1.35fr_0.65fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary"><BookOpenCheck className="size-6" /></div>
                <h3 className="text-2xl font-bold sm:text-3xl">Cybersecurity & Ethical Hacking</h3>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  A practical training program designed to help students understand cybersecurity fundamentals and security operations.
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {courseTopics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-card-foreground sm:text-base">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"><Check className="size-3.5" /></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center border-t border-border bg-elevated p-7 text-center sm:p-10 lg:border-l lg:border-t-0">
                <span className="text-sm font-bold uppercase text-muted-foreground">Course fee</span>
                <span className="mt-5 text-xl text-muted-foreground line-through">₹30,000</span>
                <strong className="mt-1 text-5xl text-primary">₹25,000</strong>
                <span className="mt-3 text-sm text-muted-foreground">Practical Training</span>
                <a href="tel:+919640059999" className="btn-primary mt-8 justify-center">Enquire Now <ArrowRight className="size-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-section py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading label="Why choose us" title="Learn by doing, not just watching" text="Focused on practical learning and industry-oriented skills." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="feature-card">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="size-6" /></div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading label="Curriculum" title="Course Modules" text="A structured learning path from fundamentals to security operations." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, index) => (
                <div key={module} className="module-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{module}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trainer" className="scroll-mt-20 border-y border-border bg-section py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <SectionHeading label="Your trainer" title="Learn From Industry Experience" text="Practical guidance grounded in real IT and cloud expertise." />
            <div className="mt-12 flex flex-col items-center gap-8 rounded-lg border border-border bg-card p-7 sm:p-10 md:flex-row md:gap-10">
              <div className="flex size-32 shrink-0 items-center justify-center rounded-full border-4 border-primary/20 bg-primary text-4xl font-bold text-primary-foreground">S</div>
              <div className="text-center md:text-left">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary"><BadgeCheck className="size-4" /> Microsoft Certified Trainer</div>
                <h3 className="text-3xl font-bold">Mr. Sampath</h3>
                <p className="mt-4 leading-7 text-muted-foreground">Microsoft Certified Trainer with extensive IT industry experience and practical training expertise.</p>
                <p className="mt-3 leading-7 text-muted-foreground">Training areas include Azure, DevOps, Networking, Cybersecurity and Cloud technologies.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="cta-grid scroll-mt-20 py-20 text-center lg:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-sm font-bold uppercase text-primary">Admissions open</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Start Your Cybersecurity Journey</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Build practical skills and prepare for your next IT career opportunity.</p>
            <a href="tel:+919640059999" className="btn-primary mt-9 justify-center text-base"><Phone className="size-5" /> Call +91 96400 59999</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-footer py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-muted-foreground sm:flex-row sm:text-left lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="SNIT logo" className="h-8 w-8 rounded-sm object-contain" />
            <strong className="text-foreground">SN Cyber Academy</strong>
          </div>
          <p>© 2026 SN Cyber Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase text-primary">{label}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>
    </div>
  );
}