import { randBetweenDate, randChanceBoolean } from "@ngneat/falso";
import MOCK_TASKS from "../../static/mock-tasks";
import { Task } from "../types";

const generateTasks = () => {
  const tasks: Task[] = MOCK_TASKS.map((task) => ({
    title: task.title,
    description: task.description,
    isDone: randChanceBoolean({ chanceTrue: 0.4 }),
    completedAt: randBetweenDate({
      from: "2023-02-01T00:00:00.000Z",
      to: new Date(),
    }), // should be set if isDone = true
  })).sort((a, b) => (a.completedAt ? 0 : 1) - (b.completedAt ? 0 : 1));

  return tasks;
};

export default generateTasks;
