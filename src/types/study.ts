import type { Streak_days } from "./streak-days";

export interface Study {
  id: string;
  subject: string;
  duration: number;
  streak_days: Streak_days;
}