import React from "react";
import moment from "moment";
import { MarkTodoApi, RemoveTodoApi } from "../service/ApiCall.jsx";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { MdDelete } from "react-icons/md";

function TodoTask({ todo }) {
  const handleMarkTodo = async () => {
    const res = await MarkTodoApi({
      todo_id: todo._id,
    });
    if (res.data.status === 200) {
      alert(res.data.message);
      window.location.reload();
    }
  };

  const handleRemoveTodo = async () => {
    const res = await RemoveTodoApi({
      todo_id: todo._id,
    });
    if (res.data.status === 200) {
      alert(res.data.message);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="flex relative py-2 px-4 my-4 w-10/12 dark:bg-white dark:text-gray-900 bg-gray-700 text-white text-left  rounded-xl mx-auto  justify-between items-center">
        <div className="flex text-center">
          {todo.isCompleted ? (
            <button className="text-2xl mx-1 " onClick={handleMarkTodo}>
              <IoIosCheckmarkCircle />
            </button>
          ) : (
            <button className="text-2xl mx-1" onClick={handleMarkTodo}>
              <IoIosCheckmarkCircleOutline />
            </button>
          )}
        </div>
        <div className="w-[85%] sm:text-2xl">{todo.todoTitle} </div>
        <div className="">
          <button className="text-2xl mx-1" onClick={handleRemoveTodo}>
            <MdDelete className="hover:text-red-700" />
          </button>
        </div>
        <small className="text-sm absolute bottom-0 right-2 dark:text-gray-700 text-gray-400">
          {moment(todo.createdAt).fromNow()}
        </small>
      </div>
    </>
  );
}

export default TodoTask;
