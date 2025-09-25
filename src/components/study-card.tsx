import type { Study } from "../types/study";

interface StudyCardProps {
  study: Study;
}

export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div>
      <h2>{study.title}</h2>
      <p>Duração: {study.duration} min</p>
      <p>Intensidade: {study.streak}/7</p>
    </div>
  );
}