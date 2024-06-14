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
      return (
        <ul>
          <li key={i} className="mt-3">
            <div className="flex justify-around items-center w-full">
              <h1 className="text-4xl text-white font-semibold">
                {i + 1}. {t.tasks}
              </h1>
              <h1 className="text-gray-500">{t.desc}</h1>
              <button
                className="rounded-full bg-red-800 text-white flex items-start justify-center h-12 w-12"
                onClick={() => {
                  deleteTask(i);
                }}
              >
                x
              </button>
            </div>
          </li>
        </ul>
      );
    });
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-white font-serif">Todo-List</h1>
      <form className="p-10 mx-auto my-10 w-3/4 flex justify-between items-start gap-3">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="w-1/2 h-12 p-5 bg-white rounded-full outline-none text-black-950 text-xl"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Descripton"
          className="w-1/2 h-12 p-5 bg-white rounded-full outline-none text-black-950 text-xl"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="text-white text-3xl font-semibold bg-orange-700 h-14 w-16 rounded-full flex justify-center items-center"
          onClick={handleSubmit}
        >
          +
        </button>
      </form>
      <div className="p-3 h-16 w-1/2 mx-auto bg-transparent">
        <h1 className="text-4xl text-center pt-2 text-white">
          {renderTask}
        </h1>
      </div>
    </>
  );
}
export default page;
