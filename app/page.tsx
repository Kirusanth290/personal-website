"use client";

import Image from "next/image";
import Link from "next/link";
import { person, skills } from "./data";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HomePage() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToId("home")}
            className="text-2xl font-bold text-white hover:opacity-90 transition"
          >
            Kirusanth
          </button>

          <div className="flex items-center gap-3">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={`px-4 py-2 rounded-xl transition ${
                  active === s.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {s.label}
              </button>
            ))}

            {/* Projects goes to /projects page */}
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl transition text-white hover:bg-white/20"
            >
              Projects
            </Link>

            {/* Contact scrolls to contact section */}
            <button
              onClick={() => scrollToId("contact")}
              className={`px-4 py-2 rounded-xl transition ${
                active === "contact"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Contact
            </button>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-[78vh] flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Kirusanth
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8">
              Computer Engineering Student
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={person.resumeUrl}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                View Resume
              </a>

              <Link
                href="/projects"
                className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                See Projects →
              </Link>
            </div>

            <div className="flex gap-4">
              <a
                href={person.github}
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={person.linkedin}
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${person.email}`}
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-[300px] h-[420px] md:w-[420px] md:h-[560px]
                         rounded-2xl overflow-hidden border border-white/20
                         shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              <Image
                src="/profile.jpeg"
                alt="Kirusanth profile photo"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex justify-center">
        <div className="w-[85%] md:w-[65%] h-px bg-white/20 my-16" />
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 text-white/90 bg-gradient-to-b from-transparent to-black/15"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-cyan-500 p-2 rounded-lg">{`</>`}</span>
            About Me
          </h2>

          <p className="mb-6 leading-relaxed">
            I’m <strong>Kirusanth Palakanthan</strong>, a Computer Engineering
            student at <strong>Toronto Metropolitan University</strong>, with a
            strong interest in software engineering, embedded systems, and
            full-stack development.
          </p>

          <p className="mb-6 leading-relaxed">
            I’ve worked across C/C++, Python, Java, SQL, and TypeScript — from
            embedded systems to Oracle DBMS automation and React/Next.js web
            apps.
          </p>

          <p className="leading-relaxed">
            I’m actively preparing for internship and co-op opportunities and
            expanding my portfolio with modern tooling like Git and cloud
            platforms.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 px-6 bg-gradient-to-br from-black via-indigo-950 to-black text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <span className="bg-cyan-500 p-2 rounded-lg">⚡</span>
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl py-4 text-center hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACT SECTION (LIKE YOUR FRIEND) */}
      <section id="contact" className="pt-20">
        {/* CTA */}
        <div className="px-6">
          <div className="max-w-6xl mx-auto text-center py-16 border-t border-white/10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto mb-8">
              I’m always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
            <button
              onClick={() => scrollToId("footer")}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer-style contact block */}
        <footer
          id="footer"
          className="px-6 pb-10 pt-14 bg-black/20 border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left */}
            <div className="text-white/80">
              <div className="text-2xl font-bold text-cyan-400 mb-3">
                Kirusanth
              </div>
              <p className="leading-relaxed">
                Computer Engineering student building reliable software and
                systems with modern technologies.
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={person.github}
                  className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href={person.linkedin}
                  className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-white/80">
              <div className="text-lg font-semibold text-white mb-4">
                Quick Links
              </div>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToId("home")}
                    className="hover:text-white transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("about")}
                    className="hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("skills")}
                    className="hover:text-white transition"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("contact")}
                    className="hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="text-white/80">
              <div className="text-lg font-semibold text-white mb-4">
                Get In Touch
              </div>
              <p className="leading-relaxed mb-4">
                Feel free to reach out for collaborations or just a friendly
                hello!
              </p>
              <a
                href={`mailto:${person.email}`}
                className="text-cyan-300 hover:text-cyan-200 transition"
              >
                {person.email}
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            © {new Date().getFullYear()} Kirusanth Palakanthan. All rights
            reserved.
          </div>
        </footer>
      </section>
    </div>
  );
}
