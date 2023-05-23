import { faker } from "@faker-js/faker";
import MOCK_TASKS from "../../static/mock-tasks";
import { Task } from "../types";

const generateTasks = () => {
  const tasks: Task[] = faker.helpers
    .arrayElements(MOCK_TASKS, { min: 7, max: 999 })
    .map((task) => ({
      title: task.title,
      description: task.description,
      isDone: faker.datatype.boolean(0.4),
      completedAt: faker.date.between({
        from: "2023-02-01T00:00:00.000Z",
        to: new Date(),
      }), // should be set if isDone = true
    }))
    .sort((a, b) => (a.completedAt ? 0 : 1) - (b.completedAt ? 0 : 1));

  return tasks;
};

export default generateTasks;
