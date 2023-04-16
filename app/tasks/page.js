"use client";

import { useState } from "react";

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([task, ...tasks]);
    setTask("");
  };
  return (
    <div className="flex justify-center bg-black text-white">
      <div className="my-12">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Task"
            className="px-2 text-black"
            value={task}
            onChange={handleChange}
          />
          <button type="submit" className="border ml-2 rounded-sm">
            Add
          </button>
        </form>
        <div className="text-xl text-center">
          <h3>Tasks</h3>
          <div>
            {tasks?.map((task, i) => {
              return <p key={i}>{task}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
