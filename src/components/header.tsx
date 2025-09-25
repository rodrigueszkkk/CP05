// src/components/Header.tsx
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-1 rounded-md text-sm font-medium",
      isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-900/5",
    ].join(" ");

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">📚 StudyLog</Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/add" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
>+ Adicionar</NavLink>
        </nav>
      </div>
    </header>
  );
}