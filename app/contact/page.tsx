  "use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

function SocialIcon({ name }: { name: string }) {
  const icons: { [key: string]: { svg: React.ReactNode; color: string } } = {
    GitHub: {
      color: "#000000 dark:#ffffff",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    LinkedIn: {
      color: "#0a66c2",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.029-8.828 0-9.737h3.554v1.375c.421-.651 1.175-1.58 2.86-1.58 2.08 0 3.641 1.36 3.641 4.284v5.658zM9.094 9.297c-1.145 0-1.89-.762-1.89-1.715 0-.959.745-1.715 1.93-1.715 1.183 0 1.888.756 1.905 1.715 0 .953-.722 1.715-1.945 1.715zm-2.041 11.155h3.854v-9.737H7.053v9.737zM24 0H0v24h24V0zm-3.57 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.985-2.236-1.082 0-1.723.721-2.004 1.418-.103.249-.129.597-.129.946v5.441H9.158V10.715h3.554v1.375c.421-.651 1.175-1.58 2.86-1.58 2.08 0 3.641 1.36 3.641 4.284v5.658z"/>
        </svg>
      )
    },
    Instagram: {
      color: "#e4405f",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
        </svg>
      )
    },
    Email: {
      color: "#ea4335",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
  };

  const icon = icons[name];
  if (!icon) return <span>{name}</span>;
  
  return (
    <span style={{ color: icon.color }}>
      {icon.svg}
    </span>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("Contact API response:", { status: res.status, ok: res.ok });
      if (!res.ok) {
        const error = await res.json();
        console.error("Contact API error:", error);
        throw new Error(error?.error || "Request failed");
      }
      setStatus("sent");
      // Reset form safely
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
      // Auto-clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      // Auto-clear error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

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
            
            <h1 className="text-xl font-bold text-[var(--accent)]">Contact</h1>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--card-bg)]/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
        
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--card-bg)]/40 backdrop-blur-sm
                            border border-[var(--card-border)]/50 rounded-xl p-8 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}>
                Get In Touch
              </h2>

              <form onSubmit={submit} className="space-y-5 animate-children">
                <div style={{ animationDelay: "0.2s" }}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-[var(--card-border)]/50
                               bg-[var(--card-bg)]/50 backdrop-blur-sm p-3
                               focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                               transition-all duration-300 hover:border-[var(--accent)]/50
                               text-[var(--foreground)] placeholder-[var(--text-secondary)]"
                    placeholder="Your name"
                  />
                </div>

                <div style={{ animationDelay: "0.3s" }}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-[var(--card-border)]/50
                               bg-[var(--card-bg)]/50 backdrop-blur-sm p-3
                               focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                               transition-all duration-300 hover:border-[var(--accent)]/50
                               text-[var(--foreground)] placeholder-[var(--text-secondary)]"
                    placeholder="you@example.com"
                  />
                </div>

                <div style={{ animationDelay: "0.4s" }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-[var(--card-border)]/50
                               bg-[var(--card-bg)]/50 backdrop-blur-sm p-3
                               focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                               transition-all duration-300 hover:border-[var(--accent)]/50
                               text-[var(--foreground)] placeholder-[var(--text-secondary)]"
                    placeholder="How can I help?"
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold
                             hover:bg-[var(--button-hover)] disabled:opacity-60 transition-all duration-300
                             hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{ animationDelay: "0.5s" }}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "sent" && (
                  <p className="text-sm p-3 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 animate-pulse-subtle">
                    ✓ Thanks! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm p-3 rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 animate-pulse-subtle">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--card-bg)]/40 backdrop-blur-sm
                            border border-[var(--card-border)]/50 rounded-xl p-8 animate-fade-in-up"
                 style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6 animate-slide-in-left"
                  style={{ animationDelay: "0.3s" }}>
                Other Ways to Connect
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-children"
                   style={{ animationDelay: "0.4s" }}>
                {[
                  { 
                    name: "GitHub", 
                    url: "https://github.com/ashwin-jakanathan", 
                    icon: "GitHub"
                  },
                  { 
                    name: "LinkedIn", 
                    url: "https://www.linkedin.com/in/ashwin-jakanathan-6639a7291/", 
                    icon: "LinkedIn"
                  },
                  { 
                    name: "Instagram", 
                    url: "https://www.instagram.com/ashwin.j12/", 
                    icon: "Instagram"
                  },
                  { 
                    name: "Email", 
                    url: "mailto:ashwin.jakanathan@gmail.com", 
                    icon: "Email"
                  },
                ].map((social, i) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-center gap-2 p-4 rounded-lg
                               border border-[var(--card-border)]/50 bg-[var(--card-bg)]/50 backdrop-blur-sm
                               hover:border-[var(--accent)] hover:bg-[var(--accent)]/20
                               transition-all duration-300 hover:scale-110 hover:shadow-lg
                               text-sm font-medium"
                    title={social.name}
                    style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                  >
                    <SocialIcon name={social.icon} />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}