"use client";

import Image from "next/image";
import Link from "next/link";
import { person, skills } from "./data";
import { Github, Linkedin, Mail } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Kirusanth</h1>

          <div className="flex items-center gap-4">
            {["about", "skills"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToId(section)}
                className={`px-4 py-2 rounded-xl transition ${
                  active === section
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl transition text-white hover:bg-white/20"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl transition text-white hover:bg-white/20"
            >
              Contact
            </Link>

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
              >
                <Github />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${person.email}`}
                className="p-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative 
                w-[300px] h-[420px]
                md:w-[420px] md:h-[560px]
                rounded-2xl overflow-hidden
                border border-white/20
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
            full-stack development. I’m passionate about building reliable,
            scalable solutions that bridge hardware and software, and I enjoy
            applying engineering fundamentals to solve real-world problems.
          </p>

          <p className="mb-6 leading-relaxed">
            Through my academic and project experience, I’ve developed a solid
            foundation in programming, data structures, and system design, with
            hands-on work across C/C++, Python, Java, SQL, and TypeScript. I’ve
            built and debugged embedded systems using microcontrollers, designed
            relational database systems with Oracle SQL, and developed responsive
            web applications using React and Next.js.
          </p>

          <p className="mb-6 leading-relaxed">
            My projects range from a robot maze navigation system using
            sensor-based finite state machines, to a fully automated Ride & Pickup
            Database Management System integrating Oracle SQL with Unix shell
            scripting. I’ve also worked on backend APIs, database integration, and
            frontend interfaces, giving me a well-rounded perspective on modern
            software development.
          </p>

          <p className="leading-relaxed">
            I thrive in collaborative, fast-paced environments where I can
            combine analytical thinking with attention to detail to deliver
            clean, maintainable code. Outside of academics, I’m actively
            preparing for internship and co-op opportunities, expanding my
            portfolio, and strengthening my skills with tools such as Git,
            Docker, and cloud platforms.
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

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-t from-black/60 to-transparent text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600
                     text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Get In Touch →
        </Link>
      </section>

      {/* FOOTER (3 columns) */}
      <footer className="bg-black/40 border-t border-white/10 py-16 px-6 text-white/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">Kirusanth</h3>
            <p className="text-white/70 mb-4">
              Computer Engineering student building innovative software and
              embedded systems.
            </p>

            <div className="flex gap-4">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${person.email}`}
                className="hover:text-cyan-400 transition"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("about");
                  }}
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("skills");
                  }}
                  className="hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-white/70 mb-2">
              Feel free to reach out for collaboration or opportunities.
            </p>
            <a
              href={`mailto:${person.email}`}
              className="text-cyan-400 hover:underline"
            >
              {person.email}
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Kirusanth Palakanthan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
