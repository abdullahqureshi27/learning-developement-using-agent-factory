"use client";

import { useState } from "react";
import { FilterOption, Task } from "@/types/task";
import TaskForm from "@/components/TaskForm";
import TaskStats from "@/components/TaskStats";
import TaskFilter from "@/components/TaskFilter";
export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");
  const [filter, setFilter] = useState<FilterOption>("all");

  function addTask() {
    if (title.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  }

  function editTask(task: Task) {
    setEditingId(task.id);
    setEditingTitle(task.title);
  }
  
  function saveEditedTask(id: number) {
    if (editingTitle.trim() === "") return;

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: editingTitle,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingId(null);
    setEditingTitle("");
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        <p className="mt-2 text-gray-600">
          Practice React state, props, events and TypeScript.
        </p>

        <TaskForm
          editingId={editingId}
          editingTitle={editingTitle}
          title={title}
          setEditingId={setEditingId}
          setEditingTitle={setEditingTitle}
          setTitle={setTitle}
          saveEditedTask={saveEditedTask}
          addTask={addTask}
        />

        <div className="mt-6 space-y-3">
          <div className="flex justify-end">
            <span className="text-sm text-gray-500">
              {tasks.filter((task) => !task.completed).length} tasks left
            </span>
          </div>

          {tasks.length === 0 ? (
            <p className="rounded-xl bg-gray-50 p-4 text-center text-gray-500">
              No tasks yet.
            </p>
          ) : (
            <>
              <TaskStats filter={filter} setFilter={setFilter} />

              <TaskFilter
                tasks={tasks}
                filter={filter}
                toggleTask={toggleTask}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
