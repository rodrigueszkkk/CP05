// src/components/StudyCard.tsx
import { Link } from "react-router-dom";
import { StudySession } from "../types";

// As props são tipadas [cite: 13, 67]
interface StudyCardProps {
  session: StudySession;
}

export function StudyCard({ session }: StudyCardProps) {
  const formattedDate = new Date(session.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-bold text-blue-400 mb-2">{session.subject}</h3>
      <p><strong>Duração:</strong> {session.minutes} min</p>
      <p><strong>Data:</strong> {formattedDate}</p>
      <Link to={`/session/${session.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
        Ver Detalhes →
      </Link>
    </div>
  );
}