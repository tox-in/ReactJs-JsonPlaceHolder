import React from "react";
import { fetchTodos } from "../Services/api";
import useFetch from "./../Hooks/useFetch";

const Todos = () => {
  const { data: todos, loading, error } = useFetch(fetchTodos);
  const [filter, setFilter] = React.useState("all");

  if (loading)
    return (
      <div className="text-center p-10 animate-pulse">Loading todos...</div>
    );
  if (error) return <p className="text-red-700">Error: {error}</p>;

  const filteredTodos = todos?.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="space-y-6 pb-32">
      <div className="flex gap-4 mb-8">
        {["all", "completed", "pending"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full capitalize transition-all ${filter === type ? "bg-accent text-white" : "bg-light text-[#494949]"}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-light flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                task #{todo.id}
              </span>
              <h3 className="mt-2 text-lg font-semibold text[#494949] leading-tight">
                {todo.title}
              </h3>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  todo.completed ? "bg-green-500" : "bg-amber-500"
                }`}
              ></div>

              <p className="text-sm font-medium text-gray-500">
                {todo.completed ? "Completed" : "Pending"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
