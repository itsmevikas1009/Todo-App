import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import AddTodoModel from "./components/AddTodoModel.jsx";
import { Link } from "react-router-dom";
import Animation from "./components/Animation.jsx";
import { GetTodoListApi } from "./service/ApiCall.jsx";
import TodoTask from "./components/TodoTask.jsx";

function Dashboard({ user, setUser }) {
  const [list, setList] = useState([]);
  const [task, setTask] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);

  // Fetching the list of tasks on page load
  useEffect(() => {
    if (user) {
      fetchTodoList();
    }
    document.title = "Todo App - Home";
  }, []);

  async function fetchTodoList() {
    const res = await GetTodoListApi();
    if (res.status === 200) {
      setList(res.data.todoList.todos.reverse());
    }
  }

  function allTask() {
    if (task == false) {
      setTask(true);
      setCompleted(false);
      setPending(false);
    }
  }
  function pendingTask() {
    if (pending == false) {
      setPending(true);
      setTask(false);
      setCompleted(false);
    }
  }
  function completedTask() {
    if (completed == false) {
      setCompleted(true);
      setPending(false);
      setTask(false);
    }
  }
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div className="pt-16">
        {user ? (
          <div className="lg:flex lg:justify-center lg:items-center text-center">
            <div>
              <div className="">
                <h1 className="sm:text-4xl sm:m-5 sm:mt-0 mt-4 text-2xl dark:text-white text-gray-900">
                  Hello{" "}
                  <span className="text-[#bfe1d4] dark:text-[#00df9a]">
                    {user.firstName},
                  </span>{" "}
                  Welcome to
                </h1>
              </div>
              <Animation />
              <AddTodoModel />
            </div>
            <div className="flex flex-col lg:w-1/2 w-11/12 md:m-8 m-2 p-4 pb-8 gap-4 lg:mx-8 mx-auto border-4 dark:border-gray-400 border-gray-900 rounded-xl">
              <ul className="flex justify-around text-white my-4">
                <li className="">
                  <button
                    className={
                      task
                        ? "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer dark:border  dark:border-gray-300 dark:bg-gray-700 dark:text-gray-300 text-white bg-gray-900"
                        : "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer bg-gray-400 text-gray-900 "
                    }
                    onClick={allTask}
                  >
                    Task
                  </button>
                </li>
                <li className="">
                  <button
                    className={
                      pending
                        ? "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer dark:border dark:border-gray-300 dark:bg-gray-700 dark:text-gray-300 text-white bg-gray-900"
                        : "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer bg-gray-400 text-gray-900 "
                    }
                    onClick={pendingTask}
                  >
                    Pending
                  </button>
                </li>
                <li className="">
                  <button
                    className={
                      completed
                        ? "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer dark:border  dark:border-gray-300 dark:bg-gray-700 dark:text-gray-300 text-white bg-gray-900 "
                        : "mx-1 px-4 p-1 sm:w-32 rounded-xl cursor-pointer bg-gray-400 text-gray-900 "
                    }
                    onClick={completedTask}
                  >
                    Completed
                  </button>
                </li>
              </ul>
              {task ? (
                <div className="h-96 overflow-auto scroll-auto">
                  {list.map((todo) => {
                    return <TodoTask todo={todo} key={todo._id} />;
                  })}
                </div>
              ) : pending ? (
                <div className="h-96 overflow-auto scroll-auto">
                  {list.map((todo) => {
                    if (!todo.isCompleted)
                      return <TodoTask todo={todo} key={todo._id} />;
                  })}
                </div>
              ) : (
                <div className="h-96 overflow-auto scroll-auto">
                  {list.map((todo) => {
                    if (todo.isCompleted)
                      return <TodoTask todo={todo} key={todo._id} />;
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="dark:text-white text-gray-900 text-5xl text-center my-20">
            Welcome to Our&nbsp;
            <h1
              id="animate"
              className="inline-block text-[#bfe1d4] dark:text-[#00df9a]"
            >
              <span>T</span>
              <span>O</span>
              <span>D</span>
              <span>O</span>
              <span>&nbsp;</span>
              <span>A</span>
              <span>P</span>
              <span>P</span>
            </h1>
            , <br />
            <br />
            <Link
              className="dark:text-gray-400 underline dark:hover:text-gray-600 p-3 text-white hover:text-gray-400"
              to="/login"
            >
              Login
            </Link>
            to get started!
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
