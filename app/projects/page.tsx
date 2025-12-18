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
    title: "Ride & Pickup Database Management System",
desc: "Designed and implemented a comprehensive database system to manage a campus ride & pickup marketplace. Developed a robust relational schema and optimized complex Oracle SQL queries to support users, rides, bookings, and reporting. Automated database operations using Unix shell scripts in a Linux environment to ensure data integrity, secure transactions, and reliable system performance.",
stack: ["Oracle SQL", "Unix Shell", "Linux", "Database Design", "Automation"],
link: "https://github.com/Kirusanth290/Ride-Pickup-Database-Management-System"

  },
  {
  title: "Serverless Portfolio Backend",
  desc: "Contact form API with monitoring (CloudWatch) + alerts (SNS).",
  stack: ["API Gateway", "Lambda (Python)", "DynamoDB", "SES", "Terraform"],
},
  {
    title: "Bookstore Management System",
desc: "Developed a Java-based bookstore management application using object-oriented programming principles and the State Design Pattern. Implemented persistent file-based storage to manage inventory, customer interactions, and transaction states across sessions. Designed modular, maintainable code to handle state transitions, data validation, and file I/O operations efficiently.",
stack: ["Java", "OOP", "State Pattern", "File I/O"],
link: "https://github.com/Kirusanth290/Book_Store_Project"

  },
  {
   title: "Microprocessor Systems Project — Robot Guidance Challenge",
desc: "Developed an autonomous robot navigation system as part of a microprocessor systems course project. Designed firmware logic and control algorithms to guide a robot through maze environments using sensor feedback and finite state machines. Implemented decision-making routines for obstacle detection, path correction, and goal achievement while ensuring responsiveness and reliability in real-time operation.",
stack: ["C", "Microcontrollers", "Embedded Systems", "Finite State Machines"],
link: "https://github.com/Kirusanth290/Microprocessor-Systems-Project-Robot-Guidance-Challenge"

  },
  {
    title: "Fitness Exercise Application",
desc: "Designed and developed a responsive, user-friendly fitness application using React and Material UI, allowing users to explore over 100 exercises categorized by muscle groups and workout types. Integrated RapidAPI to dynamically fetch exercise data, ensuring real-time content delivery and a seamless user experience. Applied modern React development practices such as custom hooks and a modular file structure to improve performance, maintainability, and scalability.",
stack: ["React.js", "Material UI", "RapidAPI", "Frontend Development", "Web Design"],
link: "#"

  },
  {
   title: "Google Data Analytics Capstone Project",
desc: "Completed an end-to-end data analytics capstone as part of the Google Data Analytics Professional Certificate. Performed data cleaning, transformation, and exploratory analysis on a real-world dataset to identify trends and actionable insights. Utilized SQL and spreadsheet tools for analysis, created data visualizations to communicate findings, and delivered data-driven recommendations supported by clear documentation and storytelling.",
stack: ["Data Analysis", "SQL", "Spreadsheets", "Data Visualization", "Data Cleaning"],
link: "#"

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






























