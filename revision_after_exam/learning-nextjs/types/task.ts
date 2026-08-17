export type Task = {
  id: number;
  title: string;
  completed: boolean;
};


export type FilterOption = "all" | "active" | "completed";