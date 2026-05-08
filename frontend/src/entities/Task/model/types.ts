export type Task = {
  id: string;
  name: string;
  description: string;
  numberOfPoints: number;
  deadline: string;
  taskCategoryId: string;
  projectId: string;
};
export type TaskInProject = {
  id: string;
  name: string;
  description: string;
  numberOfPoints: number;
  deadline: string;
  taskCategory: Category;
  status: string;
};
export type Category = {
  id: string;
  name: string;
  description: string;
};

export type TaskReport = {
  taskId: string;
  title: string;
  description: string;
  files: string[];
};
