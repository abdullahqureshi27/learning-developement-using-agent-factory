import { FilterOption, Task } from "@/types/task";

type TaskFilterProps = {
  tasks: Task[];
  filter: FilterOption;
  toggleTask: (id: number) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: number) => void;
};

const TaskFilter = ({
  tasks,
  filter,
  toggleTask,
  editTask,
  deleteTask,
}: TaskFilterProps) => {
  return (
    <>
      {tasks
        .filter((task) => {
          if (filter === "active") return !task.completed;
          if (filter === "completed") return task.completed;
          return true;
        })
        .map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
          >
            <button
              className={`text-left ${
                task.completed ? "text-gray-400 line-through" : "text-gray-900"
              }`}
            >
              {task.title}
            </button>
            <div className="flex gap-x-2">
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  id={`completed-task-${task.id}`}
                  className="cursor-pointer"
                />
                <label htmlFor={`completed-task-${task.id}`} className="ml-2">
                  Completed
                </label>
              </div>
              <button
                onClick={() => editTask(task)}
                className="rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-300"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="rounded-lg bg-red-50 px-3 py-1 text-sm text-red-600 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TaskFilter;
