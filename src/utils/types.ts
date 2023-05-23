export type Slot = { start: number; end: number };
export type HalfDaySlots = [Slot, Slot]; // Because we generate 4 activities per day

export type Activity = {
  name: string;
  project: string;
  start: Date;
  end: Date;
};

export type Task = {
  title: string;
  description?: string;
  isDone: boolean;
  completedAt?: Date;
};
