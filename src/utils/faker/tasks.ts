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
    }));
  return tasks;
};

export default generateTasks;
