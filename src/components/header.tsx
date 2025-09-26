// src/components/header.tsx

import { Link, NavLink } from "react-router-dom";

export function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium", // Ajustado
      isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-900/5",
    ].join(" ");

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">📚 StudyLog</Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          {/* O padding foi ajustado para px-4 e py-2 */}
          <NavLink to="/add" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            + Adicionar
          </NavLink>
        </nav>
      </div>
    </header>
  );
} 