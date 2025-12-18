"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";
import { person, skills } from "./data";

export default function Home() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setSending(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setStatus({ type: "ok", msg: "Message sent! I’ll get back to you soon." });
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[var(--card-bg)]/90 to-[var(--card-bg)]/50 border-b border-[var(--card-border)]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-[var(--accent)] text-lg">
              {person.name}
            </Link>

            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a className="hover:text-[var(--accent)] transition-colors" href="#about">
                About
              </a>
              <a className="hover:text-[var(--accent)] transition-colors" href="#skills">
                Skills
              </a>
              <Link className="hover:text-[var(--accent)] transition-colors" href="/projects">
                Projects
              </Link>
              <a className="hover:text-[var(--accent)] transition-colors" href="#contact">
                Contact
              </a>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)]">
                Hi, I&apos;m{" "}
                <span className="text-[var(--accent)]">{person.name}</span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)]">{person.title}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={person.resumeUrl}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                             bg-[var(--accent)] text-white hover:opacity-90 transition"
                >
                  View Resume
                </a>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                             border border-[var(--card-border)]/70 bg-[var(--card-bg)]/40
                             hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                >
                  See Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right (Image) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-[var(--card-border)]/60 shadow-xl bg-[var(--card-bg)]/40">
                <Image
                  src="/profile.jpeg"
                  alt={`${person.name} profile`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-[var(--card-border)]/60" />
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">About Me</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-4xl">
            I’m {person.name}, a Computer Engineering student focused on building practical software systems
            — from database-backed applications to embedded projects. I enjoy turning messy requirements into
            clean, working solutions: designing schemas, writing reliable code, and shipping projects that
            are easy to use and maintain.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--card-border)]/60 px-4 py-2 text-sm
                           bg-[var(--card-bg)]/40 text-[var(--text-secondary)]
                           hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA like your friend */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--card-border)]/60 bg-gradient-to-br from-[var(--card-bg)]/70 to-[var(--card-bg)]/30 backdrop-blur-sm p-10 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-[var(--foreground)]">Ready to work together?</h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              I’m always open to co-op opportunities, collaboration, and new projects. Feel free to reach out!
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold
                         bg-[var(--accent)] text-white hover:opacity-90 transition"
            >
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT (section on the home page) */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">Contact</h2>
              <p className="mt-3 text-[var(--text-secondary)]">
                Send me a message and I’ll reply as soon as I can.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="text-[var(--text-secondary)]">
                  Email:{" "}
                  <a className="text-[var(--accent)] hover:underline" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="rounded-xl p-3 border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--card-border)]/60 bg-[var(--card-bg)]/40 backdrop-blur-sm p-6 shadow-lg"
            >
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm text-[var(--text-secondary)]">
                  Name
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-[var(--card-border)]/60 bg-[var(--background)]/40 px-4 py-3 outline-none
                               focus:border-[var(--accent)] transition"
                    placeholder="Your name"
                  />
                </label>

                <label className="text-sm text-[var(--text-secondary)]">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-[var(--card-border)]/60 bg-[var(--background)]/40 px-4 py-3 outline-none
                               focus:border-[var(--accent)] transition"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="text-sm text-[var(--text-secondary)]">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-[var(--card-border)]/60 bg-[var(--background)]/40 px-4 py-3 outline-none
                               focus:border-[var(--accent)] transition resize-none"
                    placeholder="Write your message..."
                  />
                </label>

                <button
                  disabled={sending}
                  className="rounded-xl px-5 py-3 text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p
                    className={`text-sm ${
                      status.type === "ok" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER like the screenshot */}
      <footer className="mt-10 border-t border-[var(--card-border)]/60 bg-[var(--card-bg)]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left */}
            <div>
              <div className="text-xl font-bold text-[var(--accent)]">{person.name}</div>
              <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm">
                Computer Engineering student building practical software and systems — from databases and web apps to embedded projects.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a href={person.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${person.email}`} className="hover:text-[var(--accent)] transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle */}
            <div>
              <div className="text-sm font-semibold text-[var(--foreground)]">Quick Links</div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
                <a href="#about" className="hover:text-[var(--accent)] transition">About</a>
                <a href="#skills" className="hover:text-[var(--accent)] transition">Skills</a>
                <Link href="/projects" className="hover:text-[var(--accent)] transition">Projects</Link>
                <a href="#contact" className="hover:text-[var(--accent)] transition">Contact</a>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="text-sm font-semibold text-[var(--foreground)]">Get In Touch</div>
              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                Feel free to reach out for co-op roles, collaborations, or just to say hello.
              </p>
              <a
                className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline"
                href={`mailto:${person.email}`}
              >
                {person.email}
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--card-border)]/60 text-center text-xs text-[var(--text-secondary)]">
            © {year} {person.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
