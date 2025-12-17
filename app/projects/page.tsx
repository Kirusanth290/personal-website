"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

type Project = { 
  title: string; 
  desc: string; 
  stack: string[]; 
  link?: string;
};

const projects: Project[] = [
  { 
    title: "League Insights AI (Rift Rewind)",
    desc: "Hackathon submission analyzing a full year of League of Legends match history. Generates detailed performance stats, timeline analytics (early game, midgame, throws, comebacks), kill heatmaps, monthly trends, and an AI-generated season recap using Amazon Bedrock. Built with Riot API, PostgreSQL for analytics, and asynchronous data processing.",
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Recharts", "Flask", "Python", "PostgreSQL", "Riot Games API", "Amazon Bedrock", "aiohttp", "Vercel", "Render"],
    link: "https://league-insights-ai.vercel.app/",
  },
  {
    title: "E-Commerce Database Application",
    desc: "Designed a campus marketplace DBMS with entities for users, products, orders, and payments. Implemented advanced Oracle SQL queries and automated database operations using Unix Shell scripts in a Linux environment. Generated reports and ensured data consistency to support secure, reliable transactions.",
    stack: ["Oracle SQL", "Unix Shell", "Linux", "Database Design"],
    link: "#"
  },
  {
    title: "Serverless Portfolio Backend",
    desc: "Contact form API with monitoring (CloudWatch) + alerts (SNS).",
    stack: ["API Gateway","Lambda (Python)","DynamoDB","SES","Terraform"],
    link: "https://ashwin-jakanathan.vercel.app/",
  },
  {
    title: "Bookstore Management",
    desc: "Java OOP + State Pattern with persistent file storage.",
    stack: ["Java","OOP","State Pattern","File I/O"],
  },
  {
    title: "Super Smash Bros Replica",
    desc: "Developed a Super Smash Bros replica in Python, coordinating team efforts to emulate the game mechanics. Designed architecture, implemented character movement and combat, integrated audio-visual elements, and optimized performance. Demonstrated expertise in Python programming, game development, and teamwork.",
    stack: ["Python", "Game Development"],
  },
  {
    title: "Student Course Planner",
    desc: "JavaFX app using topological sort for prerequisite planning.",
    stack: ["JavaFX","Algorithms"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-[var(--card-bg)]/90 to-[var(--card-bg)]/50 border-b border-[var(--card-border)]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center gap-2 text-[var(--accent)] hover:opacity-80 transition-opacity font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            
            <h1 className="text-xl font-bold text-[var(--accent)]">Projects</h1>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
              My Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From AI-driven analytics platforms to scalable cloud architectures. Each project represents hands-on experience with modern technologies and problem-solving in real-world scenarios.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-children">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group rounded-xl border border-[var(--card-border)]/50 bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--card-bg)]/40 backdrop-blur-sm
                           p-6 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 
                           hover:shadow-lg hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--card-border)]/50 px-3 py-1 
                                 text-xs font-medium bg-[var(--card-bg)]/50 text-[var(--text-secondary)]
                                 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/20 
                                 group-hover:text-[var(--accent)] transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:gap-3 transition-all duration-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}