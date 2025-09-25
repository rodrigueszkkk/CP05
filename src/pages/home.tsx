
import { StudyCard } from "../components/StudyCard";
import type { StudySession } from "../types";


interface HomeProps {
  sessions: StudySession[];
  stats: {
    totalSessions: number;
    totalMinutes: number;
    averageMinutes: string | number;
  };
}

export default function Home({ sessions, stats }: HomeProps) {
  return (
    <div className="text-white">
      <section className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Estatísticas Gerais</h2>
        {/* Exibe os dados calculados com useMemo [cite: 51] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700 p-4 rounded"><p className="text-3xl font-bold">{stats.totalSessions}</p><p>Sessões Totais</p></div>
          <div className="bg-gray-700 p-4 rounded"><p className="text-3xl font-bold">{stats.totalMinutes}</p><p>Minutos Totais</p></div>
          <div className="bg-gray-700 p-4 rounded"><p className="text-3xl font-bold">{stats.averageMinutes}</p><p>Média de Minutos</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sessões Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.length > 0 ? (
            sessions.map(session => <StudyCard key={session.id} session={session} />)
          ) : (
            <p className="col-span-full text-center">Nenhuma sessão cadastrada.</p>
          )}
        </div>
      </section>
    </div>
  );
}