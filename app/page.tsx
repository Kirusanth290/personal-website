"use client";

import Image from "next/image";
import Link from "next/link";
import { person, skills } from "./data";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

export default function HomePage() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "skills"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0b1630] to-[#081021]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Kirusanth</h1>

          <div className="flex items-center gap-3">
            {[
              { id: "about", label: "About", type: "scroll" as const },
              { id: "skills", label: "Skills", type: "scroll" as const },
              { id: "/projects", label: "Projects", type: "route" as const },
              { id: "/contact", label: "Contact", type: "route" as const },
            ].map((item) => {
              const isActive = item.type === "scroll" && active === item.id;

              if (item.type === "route") {
                return (
                  <Link
                    key={item.id}
                    href={item.id}
                    className="px-4 py-2 rounded-xl text-white hover:bg-white/10 transition"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`px-4 py-2 rounded-xl transition ${
                    isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

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
              Hi, I'm{" "}
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
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="w-[85%] md:w-[65%] h-px bg-white/15 my-16" />
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 text-white/90">
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
            I’ve built and debugged embedded systems using microcontrollers,
            designed relational database systems with Oracle SQL, and developed
            responsive web applications using React and Next.js.
          </p>

          <p className="leading-relaxed">
            I’m actively preparing for internship and co-op opportunities,
            expanding my portfolio, and strengthening my skills with tools such
            as Git, Docker, and cloud platforms.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 text-white">
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

      {/* CTA + FOOTER (like your friend's) */}
      <section className="mt-20 border-t border-white/10 bg-black/20">
        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to work together?
          </h3>
          <p className="text-white/80 text-lg mb-10">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#5aa7ff] hover:bg-[#4598ff] text-white
                       px-8 py-4 rounded-xl font-semibold transition"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="border-t border-white/10" />

        {/* 3-column footer */}
        <footer className="max-w-6xl mx-auto px-6 py-16 text-white/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left */}
            <div>
              <div className="text-xl font-bold text-white mb-3">Kirusanth</div>
              <p className="text-white/70 leading-relaxed">
                Computer Engineering student building reliable software solutions
                with modern web technologies.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="p-2 rounded-lg border border-white/15 hover:bg-white/10 transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle */}
            <div>
              <div className="text-lg font-semibold text-white mb-4">Quick Links</div>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToId("home")} className="hover:text-white transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId("about")} className="hover:text-white transition">
                    About
                  </button>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToId("skills")} className="hover:text-white transition">
                    Skills
                  </button>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <div className="text-lg font-semibold text-white mb-4">Get In Touch</div>
              <p className="text-white/70 leading-relaxed mb-4">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a
                href={`mailto:${person.email}`}
                className="text-[#7cc0ff] hover:text-[#9ad0ff] transition"
              >
                {person.email}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            © {new Date().getFullYear()} Kirusanth Palakanthan. All rights reserved.
          </div>
        </footer>
      </section>
    </div>
  );
}
