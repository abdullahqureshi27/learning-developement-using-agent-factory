import React from "react";
type TaskFormProps = {
  editingId: number | null;
  editingTitle: string;
  title: string;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditingTitle: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  saveEditedTask: (id: number) => void;
  addTask: () => void;
};

const TaskForm = ({
  editingId,
  editingTitle,
  title,
  setEditingId,
  setEditingTitle,
  setTitle,
  saveEditedTask,
  addTask,
}: TaskFormProps) => {
  return (
    <div className="mt-6 flex gap-3">
      <input
        value={editingId ? editingTitle : title}
        onChange={(event) => {
          if (editingId) {
            setEditingTitle(event.target.value);
          } else {
            setTitle(event.target.value);
          }
        }}
        onKeyDown={(e) =>
          e.key == "Enter" &&
          (editingId ? saveEditedTask(editingId) : addTask())
        }
        placeholder="Enter a task"
        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-gray-900"
      />

      {editingId && (
        <button
          onClick={() => {
            setEditingId(null);
            setEditingTitle("");
          }}
          className="rounded-xl bg-gray-900 px-5 py-2 text-white hover:bg-gray-700"
        >
          Cancel
        </button>
      )}

      <button
        onClick={editingId ? () => saveEditedTask(editingId) : addTask}
        disabled={editingId ? editingTitle.trim() === "" : title.trim() === ""}
        className="rounded-xl bg-gray-900 px-5 py-2 text-white hover:bg-gray-700"
      >
        {editingId ? "Save" : "Add"}
      </button>
    </div>
  );
};

export default TaskForm;
