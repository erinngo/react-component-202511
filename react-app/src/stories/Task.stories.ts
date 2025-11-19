// import { fn } from "@storybook/test";

import { Task } from "./Task";

export default {
  title: "Example/Task",
  component: Task,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Storybook 튜토리얼 시작하기",
      state: "TASK_INBOX",
    },
  },
};

export const Done = {
  args: {
    task: {
      id: "2",
      title: "스토리를 작성하는 중",
      state: "TASK_DONE",
    },
  },
};
