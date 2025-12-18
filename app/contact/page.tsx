"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { person } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[var(--card-bg)]/90 to-[var(--card-bg)]/50 border-b border-[var(--card-border)]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-[var(--accent)] text-lg">
              {person.name.toLowerCase()}
            </Link>

            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
                About
              </a>
              <a href="#skills" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
                Skills
              </a>
              <Link href="/projects" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
                Contact
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-[var(--accent)]">{person.name}</span>
              </h1>
              <p className="mt-4 text-[var(--text-secondary)] text-lg">
                {person.title}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={person.resumeUrl}
                  className="rounded-xl px-5 py-3 bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition"
                >
                  View Resume
                </a>
                <Link
                  href="/projects"
                  className="rounded-xl px-5 py-3 border border-[var(--card-border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                >
                  See Projects →
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="w-11 h-11 rounded-xl border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex lg:justify-end justify-center">
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/40 p-3 shadow-xl">
                <div className="relative w-[260px] h-[320px] sm:w-[320px] sm:h-[380px] overflow-hidden rounded-2xl">
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

          {/* Divider line between Hero and About (you asked for a line) */}
          <div className="mt-14 border-t border-[var(--card-border)]/60" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-4xl">
            I’m Kirusanth Palakanthan, a Computer Engineering student at Toronto Metropolitan University
            focused on building practical software + hardware solutions. I enjoy working across full-stack development,
            databases, and embedded systems—turning coursework and projects into clean, reliable systems.
          </p>

          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed max-w-4xl">
            Recently, I built an Oracle SQL + Unix Shell automated DBMS (Ride & Pickup), developed Java OOP projects
            with maintainable design patterns, and built React apps integrating real APIs. I’m especially interested
            in roles where I can combine problem-solving, system thinking, and hands-on development to ship features
            that work end-to-end.
          </p>
        </div>
      </section>

      {/* SKILLS ANCHOR (keep your existing skills section if you already have one) */}
      <section id="skills" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-[var(--text-secondary)]">
            Go to the Skills page/section you already have, or replace this with your current skills grid.
          </p>
        </div>
      </section>

      {/* CTA (like your friend) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--card-bg)]/70 to-[var(--card-bg)]/30 p-10 text-center shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-bold">Ready to work together?</h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              I’m always open to new projects, collaboration, and internship opportunities. Feel free to reach out!
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (like your friend) */}
      <footer className="border-t border-[var(--card-border)]/60 bg-[var(--card-bg)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left */}
            <div>
              <div className="text-xl font-bold text-[var(--accent)]">
                {person.name.toLowerCase()}
              </div>
              <p className="mt-3 text-[var(--text-secondary)] max-w-sm">
                Computer Engineering student building practical software solutions with modern tools and strong fundamentals.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <a href={person.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${person.email}`} className="hover:text-[var(--accent)] transition" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-semibold mb-3">Quick Links</div>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li><Link className="hover:text-[var(--accent)] transition" href="/">Home</Link></li>
                <li><a className="hover:text-[var(--accent)] transition" href="#about">About</a></li>
                <li><Link className="hover:text-[var(--accent)] transition" href="/projects">Projects</Link></li>
                <li><a className="hover:text-[var(--accent)] transition" href="#skills">Skills</a></li>
                <li><Link className="hover:text-[var(--accent)] transition" href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <div className="font-semibold mb-3">Get In Touch</div>
              <p className="text-[var(--text-secondary)]">
                Feel free to reach out for collaborations or opportunities — I’m happy to connect.
              </p>
              <a
                href={`mailto:${person.email}`}
                className="mt-4 inline-block text-[var(--accent)] hover:opacity-80 transition break-all"
              >
                {person.email}
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--card-border)]/60 text-center text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
