/* eslint-disable no-unused-vars */
export type Slot = { start: number; end: number };
export type HalfDaySlots = [Slot, Slot]; // Because we generate 4 activities per day

export type Project = {
  title: string;
  completionPercentage: number;
  currentSprint: string;
  deadline: Date;
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

export enum PRStatus {
  Ready = "ready",
  Rejected = "rejected",
  Pending = "pending",
  Draft = "draft",
}
