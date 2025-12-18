"use client";

import Image from "next/image";
import Link from "next/link";
import { person, skills } from "./data";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

export default function HomePage() {
  const [active, setActive] = useState<"home" | "about" | "skills">("home");

  useEffect(() => {
    const ids: Array<"home" | "about" | "skills"> = ["home", "about", "skills"];
    const obs: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const o = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -60% 0px" }
      );

      o.observe(el);
      obs.push(o);
    });

    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[var(--card-bg)]/90 to-[var(--card-bg)]/50 border-b border-[var(--card-border)]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToId("home")}
              className="text-xl font-bold text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              Kirusanth
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToId("about")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === "about"
                    ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                    : "hover:bg-[var(--card-bg)]/50 text-[var(--text-secondary)]"
                }`}
              >
                About
              </button>

              <button
                onClick={() => scrollToId("skills")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === "skills"
                    ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                    : "hover:bg-[var(--card-bg)]/50 text-[var(--text-secondary)]"
                }`}
              >
                Skills
              </button>

              <Link
                href="/projects"
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-[var(--card-bg)]/50 text-[var(--text-secondary)] transition-all"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-[var(--card-bg)]/50 text-[var(--text-secondary)] transition-all"
              >
                Contact
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-[var(--foreground)] leading-tight">
                Hi, I'm{" "}
                <span className="text-[var(--accent)]">{person.name}</span>
              </h1>

              <p className="text-xl text-[var(--text-secondary)] max-w-lg">
                {person.title}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={person.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg hover:bg-[var(--button-hover)] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  View Resume
                </a>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--card-border)] text-[var(--foreground)] font-semibold rounded-lg hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 hover:scale-105 group"
                >
                  See Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[var(--card-bg)]/50 border border-[var(--card-border)]/50 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-[var(--foreground)]" />
                </a>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[var(--card-bg)]/50 border border-[var(--card-border)]/50 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-[var(--foreground)]" />
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="p-3 rounded-lg bg-[var(--card-bg)]/50 border border-[var(--card-border)]/50 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-[var(--foreground)]" />
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full aspect-square">
                <div className="absolute -inset-6 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-2xl blur-2xl" />
                <div className="absolute -inset-3 bg-[var(--card-bg)]/30 rounded-2xl border border-[var(--card-border)]/30" />

                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-2xl">
                  <Image
                    src="/profile.jpeg"
                    alt={person.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 border-t border-[var(--card-border)]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--card-bg)]/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-12 flex items-center gap-3 animate-fade-in-up">
              <div className="p-2 rounded-lg bg-[var(--accent)]/20 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-[var(--accent)]" />
              </div>
              About Me
            </h2>

            <div className="space-y-6 text-[var(--text-secondary)]">
              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                I’m <strong>Kirusanth Palakanthan</strong>, a Computer Engineering student at{" "}
                <strong>Toronto Metropolitan University</strong>, with a strong interest in software engineering,
                embedded systems, and full-stack development.
              </p>

              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Through my academic and project experience, I’ve built a foundation across C/C++, Python, Java, SQL,
                and TypeScript — including embedded systems work with microcontrollers, Oracle SQL database design,
                and modern web development with React/Next.js.
              </p>

              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                My projects range from a robot maze navigation system using sensor-based finite state machines,
                to a fully automated Ride & Pickup DBMS integrating Oracle SQL with Unix shell scripting.
              </p>

              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                I’m actively preparing for co-op opportunities, expanding my portfolio, and strengthening my skills
                with tools like Git, Docker, and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-20 border-t border-[var(--card-border)]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--card-bg)]/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-16 flex items-center gap-3 animate-fade-in-up">
            <div className="p-2 rounded-lg bg-[var(--accent)]/20 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-[var(--accent)]" />
            </div>
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 animate-children">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className="p-6 rounded-lg bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--card-bg)]/40 border border-[var(--card-border)]/50 backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer text-center"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                <span className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors text-base">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
