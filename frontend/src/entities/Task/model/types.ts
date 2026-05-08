export type Task = {
  id: string;
  name: string;
  description: string;
  numberOfPoints: number;
  deadline: string;
  taskCategoryId: string;
  projectId: string;
};

export type TaskReport = {
  taskId: string,
  title: string,
  description: string,
  files: string[]
}

