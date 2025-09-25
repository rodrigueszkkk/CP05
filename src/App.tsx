
import { useState, useMemo, useCallback, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import type { StudySession } from "./types/types";
import { Layout } from "./components/layout";
import { Loading } from "./components/Loading";
import { ErrorFallback } from "./components/ErrorFallback";

const Home = lazy(() => import("./pages/home"));
const NewSession = lazy(() => import("./pages/NewSession"));
const SessionDetails = lazy(() => import("./pages/SessionDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [sessions, setSessions] = useState<StudySession[]>([
    {
      id: "1",
      subject: "React com TypeScript",
      minutes: 60,
      date: "2025-09-25",
      notes: "Revisão de Hooks e Props tipadas.",
    },
    {
      id: "2",
      subject: "TailwindCSS",
      minutes: 45,
      date: "2025-09-24",
      notes: "Estudando design responsivo.",
    },
  ]);

  const handleAddSession = useCallback((newSession: Omit<StudySession, "id">) => {
    setSessions(prev => [...prev, { ...newSession, id: crypto.randomUUID() }]);
  }, []);

  const stats = useMemo(() => {
    const totalSessions = sessions.length;
    const totalMinutes = sessions.reduce((acc, s) => acc + s.minutes, 0);
    const averageMinutes = totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0;
    return { totalSessions, totalMinutes, averageMinutes };
  }, [sessions]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home sessions={sessions} stats={stats} />} />
            <Route path="/add" element={<NewSession onAddSession={handleAddSession} />} />
            <Route path="/session/:id" element={<SessionDetails sessions={sessions} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
