import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="journal-heading text-xl">
            Agriastha
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-[var(--text-primary)] hover:text-[var(--color-primary-600)]">
              About the Journal
            </Link>
            <Link to="/publications" className="text-[var(--text-primary)] hover:text-[var(--color-primary-600)]">
              Publications
            </Link>
            <Link to="/guidelines" className="text-[var(--text-primary)] hover:text-[var(--color-primary-600)]">
              Author Guidelines
            </Link>
            <Link to="/editorial-board" className="text-[var(--text-primary)] hover:text-[var(--color-primary-600)]">
              Editorial Board
            </Link>
            <Link to="/submit" className="text-[var(--text-primary)] hover:text-[var(--color-primary-600)]">
              Submit Paper
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}