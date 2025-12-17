import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "./theme-toggle"; // Assuming you have this component
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirusanth Palakanthan | Computer Engineering Student",
  description: "Aspiring Full-Stack Engineer. Passionate about building scalable software and designing user-centric solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-gradient-to-r from-gray-900 via-gray-800 to-black text-[var(--foreground)] font-${inter.className}`}
      >
        <header className="w-full p-4 shadow-md bg-[var(--foreground)] text-[var(--background)]">
          <h1 className="text-xl font-bold text-center">
            Welcome to My Portfolio
          </h1>
        </header>
        <main className="w-full min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="w-full bg-[var(--foreground)] text-[var(--background)] text-center py-4">
          <p>© {new Date().getFullYear()} Kirusanth Palakanthan. All rights reserved.</p>
          <div className="social-links flex justify-center space-x-4 mt-2">
            <a href="https://github.com/Kirusanth290" className="text-blue-400">GitHub</a>
            <a href="https://linkedin.com/in/your-profile" className="text-blue-400">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}