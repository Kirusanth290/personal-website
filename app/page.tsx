"use client";

import Image from "next/image";
import Link from "next/link";
import { person, skills } from "./data";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function HomePage() {
  const [active, setActive] = useState("home");
  
  useEffect(() => {
    const ids = ["home", "about", "skills"];
    const obs: IntersectionObserver[] = [];
    
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      
      const o = new IntersectionObserver(
        (entries) => entries.forEach(e => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -60% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[var(--card-bg)]/90 to-[var(--card-bg)]/50 border-b border-[var(--card-border)]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToId("home")} 
              className="text-xl font-bold text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              ashwin
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

      {/* Hero Section */}
      <section id="home" className="relative py-20 sm:py-32 overflow-hidden">
        {/* Depth layer backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-[var(--foreground)] leading-tight">
                Hi, I'm <span className="text-[var(--accent)]">{person.name}</span>
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

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Profile image with layered depth */}
              <div className="relative w-full aspect-square">
                {/* Glow layers */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-2xl blur-2xl" />
                <div className="absolute -inset-3 bg-[var(--card-bg)]/30 rounded-2xl border border-[var(--card-border)]/30" />
                
                {/* Main image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-2xl">
                  <Image 
                    src="/profile2.jpg" 
                    alt={person.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                I'm Ashwin Jakanathan, a Computer Engineering student at Toronto Metropolitan University with a passion for software development, cloud computing, and data-driven systems. I enjoy designing efficient, user-focused solutions that bridge technology and creativity.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                With experience in web development, database systems, and cloud infrastructure, I've built projects ranging from full-stack web apps to intelligent analytics platforms. My hands-on work includes developing responsive websites using Next.js and React, crafting SQL-based database systems, and integrating AWS services for scalable deployments.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                I thrive in collaborative, agile environments where I can combine my technical knowledge with problem-solving and analytical thinking to create impactful solutions. Whether working on frontend interfaces or backend infrastructure, I'm committed to writing clean, maintainable code and delivering features that make a real impact.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, or learning new frameworks. Beyond work, I'm passionate about gaming, volleyball, snowboarding, and cooking. I believe that balance between technical pursuits and creative hobbies fuels innovation and keeps me grounded. Currently open to Summer 2025 internship opportunities where I can apply my skills to challenging, real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* CTA Section */}
      <section className="relative py-16 border-t border-[var(--card-border)]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Ready to work together?
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-lg hover:bg-[var(--button-hover)] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[var(--card-border)]/50 bg-gradient-to-b from-transparent to-[var(--card-bg)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left Column - Branding & About */}
            <div>
              <h3 className="text-xl font-bold text-[var(--accent)] mb-4">ashwin</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                Computer Engineering student building innovative software solutions with modern web technologies.
              </p>
              <div className="flex gap-4">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h4 className="font-semibold text-[var(--foreground)] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToId("home")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToId("about")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToId("skills")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    Skills
                  </button>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column - Get In Touch */}
            <div>
              <h4 className="font-semibold text-[var(--foreground)] mb-6">Get In Touch</h4>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a
                href={`mailto:${person.email}`}
                className="text-sm text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors font-medium"
              >
                {person.email}
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--card-border)]/30 pt-8">
            <p className="text-sm text-[var(--text-secondary)] text-center">
              © {new Date().getFullYear()} Ashwin Jakanathan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
