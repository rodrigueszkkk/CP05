import { useState } from "react";
import type { Streak_days } from "../types/streak-days";
import type { Study } from "../types/study";

interface StudyFormProps {
  onAdd: (study: Study) => void;
}

export function StudyForm({ onAdd }: StudyFormProps) {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState(0);
  const [streak, setStreak] = useState<Streak_days>(1);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const study: Study = {
      id: crypto.randomUUID(),
      subject,
      duration,
      streak_days,
    };

    onAdd(study);

    setSubject("");
    setDuration(0);
    setStreak(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="workout-title">Título do treino</label>
      <input
        type="text"
        id="workout-title"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="título do treino"
        className="border rounded p-2"
      />

      <label htmlFor="workout-duration">Duração (min)</label>
      <input
        type="number"
        id="workout-duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border rounded p-2"
      />

      <label htmlFor="workout-intensity">Intensidade</label>
      <input
        type="number"
        id="workout-intensity"
        value={streak}
        onChange={(e) => setStreak(Number(e.target.value) as Streak_days)}
        placeholder="Intensidade"
        min={1}
        max={5}
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar treino
      </button>
    </form>
  );
}