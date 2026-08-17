import React from "react";
type TaskStatsProps = {
  filter: "all" | "active" | "completed";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
};
const TaskStats = ({ filter, setFilter }: TaskStatsProps) => {
  return (
    <div className="flex gap-x-5">
      {" "}
      {["all", "active", "completed"].map((option) => (
        <div key={option} className="">
          {" "}
          <input
            type="radio"
            name="filter"
            id={option}
            checked={filter === option}
            onChange={() => setFilter(option as TaskStatsProps["filter"])}
          />{" "}
          <label htmlFor={option} className="ml-2">
            {" "}
            {option.charAt(0).toUpperCase() + option.slice(1)}{" "}
          </label>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default TaskStats;
