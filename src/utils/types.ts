import PRStatus from "./enums";

export type Slot = { start: number; end: number };
export type HalfDaySlots = [Slot, Slot]; // Because we generate 4 activities per day

export type PRGroup = {
  pullRequests: string[];
  status: PRStatus;
};

export type Project = {
  title: string;
  completionPercentage: number;
  currentSprint: string;
  deadline: Date;
  pullRequests: PRGroup[];
};

export type Activity = {
  name: string;
  project: Project;
  start: Date;
  end: Date;
};

export type Task = {
  title: string;
  description?: string;
  isDone: boolean;
  completedAt?: Date;
};
