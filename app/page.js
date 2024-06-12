"use client";
import React, { useState } from "react";

function page() {
  const [tasks, setTasks] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks("");
    setDesc("");
    setMainTask([...mainTask, { tasks: tasks, desc: desc }]);
  };

  const deleteTask = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = "No Task Available!";
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      console.log(i);
      return (
        <ul>
          <li key={i} className="mt-3">
            <div className="flex justify-between w-full p-8">
              <h1 className="text-4xl">
                {i + 1}. {t.tasks}
              </h1>
              <h1>{t.desc}</h1>
              <button
                className="px-4 py-2 rounded-full bg-orange-500 text-white"
                onClick={() => {
                  deleteTask(i);
                }}
              >
                Done!
              </button>
            </div>
          </li>
        </ul>
      );
    });
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-center font-serif">Todo-List</h1>
      <form className="p-10 mx-auto my-12 w-1/2 border border-white rounded-md flex items-start gap-3 justify-between">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="w-1/2 h-12 p-5 bg-transparent border border-white rounded-full outline-none text-slate-400 text-xl"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Descripton"
          className="p-2 border border-white bg-transparent  outline-none text-slate-400 text-xl rounded-lg"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="w-1.5 h-12 p-9 rounded-full bg-orange-500 text-white flex justify-center items-center text-4xl font-semibold"
          onClick={handleSubmit}
        >
          +
        </button>
      </form>
      <div className="p-5 h-16 w-full mx-auto bg-transparent">
        <h1 className="text-orange-500 text-2xl text-center pt-8">
          {renderTask}
        </h1>
      </div>
    </>
  );
}
export default page;
