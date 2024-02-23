import React, { useEffect, useState } from "react";
import { AddTodoApi } from "../service/ApiCall.jsx";
import axios from "axios";

function AddTodoModel() {
  const [todoTitle, setTodoTitle] = useState("");
  const data = {
    todoTitle,
  };

  axios.defaults.withCredentials = true;
  const handleTodo = async (e) => {
    e.preventDefault();
    if (todoTitle === "") {
      alert("Please enter a task!");
      return;
    }
    try {
      const res = await AddTodoApi(data);
      if (res.status === 200) {
        alert(res.data.message);
        window.location.reload();
        setTodoTitle("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form action="" method="POST" onSubmit={handleTodo}>
      <input
        type="text"
        name="todoTitle"
        id="todoTitle"
        className="border-4 border-black rounded-xl sm:p-4 p-2 sm:w-1/2 text-gray-900 text-xl"
        placeholder="Enter Task "
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <br className="md:hidden" />
      <button
        type="submit"
        className="dark:bg-gray-400 bg-gray-900 dark:text-gray-900 text-gray-400 text-2xl sm:p-4 p-2 rounded-xl m-5  hover:bg-gray-700 hover:text-gray-300"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoModel;
