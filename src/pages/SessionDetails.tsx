import { useParams, Link } from "react-router-dom";
import type { StudySession } from "../types/types";
import NotFound from "./NotFound";

interface SessionDetailsProps { sessions: StudySession[]; }

export default function SessionDetails({ sessions }: SessionDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const session = sessions.find(s => s.id === id);

  if (!session) { return <NotFound />; }

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-2 text-blue-400">{session.subject}</h2>
      <div className="space-y-4 mt-6">
        <p><strong>Data:</strong> {new Date(session.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
        <p><strong>Duração:</strong> {session.minutes} minutos</p>
        <p><strong>Anotações:</strong></p>
        <p className="bg-gray-700 p-4 rounded mt-2">{session.notes || 'Nenhuma.'}</p>
      </div>
      <Link to="/" className="text-blue-500 hover:underline mt-8 inline-block">
        ← Voltar
      </Link>
    </div>
  );
}