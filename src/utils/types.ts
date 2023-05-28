import PRStatus from "./enums";

export type Slot = { start: number; end: number };
export type HalfDaySlots = [Slot, Slot]; // Because we generate 4 activities per day

export type PRGroup = {
  pullRequests: string[];
  status: PRStatus;
};

export type Sprint = {
  name: string;
  issue: number;
  completionPercentage: number;
  deadline: Date;
};

export type Person = {
  id: string;
  name: string;
  team: string;
  sprint: Sprint;
  image: string;
};

export type Project = {
  title: string;
  sprints: Sprint[];
  pullRequests: PRGroup[];
  members: Person[];
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

export type Expense = {
  description: string;
  amount: string;
  date: Date;
};

export type Music = {
  title: string;
  artist: string;
  cover: string;
  duration: number;
  link: string;
};
