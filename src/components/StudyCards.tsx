import { Link } from "react-router-dom";
import type { StudySession } from "../types/types";

interface StudyCardProps {
  session: StudySession;
}

export function StudyCard({ session }: StudyCardProps) {
  const formattedDate = new Date(session.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div className="bg-gray-700 p-5 rounded-lg shadow-lg hover:bg-gray-00 transition-colors flex flex-col">
      {}
      {session.imageUrl && (
        <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
          <img src={session.imageUrl} alt={session.subject} className="w-full h-full object-contain" />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-blue-500 mb-2">{session.subject}</h3>
        <p><strong>Duração:</strong> {session.minutes} min</p>
        <p><strong>Data:</strong> {formattedDate}</p>
      </div>
      <Link to={`/session/${session.id}`} className="text-blue-500 hover:underline mt-4 inline-block self-start">
        Ver Detalhes →
      </Link>
    </div>
  );
}