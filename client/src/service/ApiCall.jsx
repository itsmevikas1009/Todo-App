import axios from "axios";

// const oldURL = "http://localhost:3000/api/login";
const loginURL = "https://todo-app-server-gilt.vercel.app/api/login";
const signUpURL = "https://todo-app-server-gilt.vercel.app/api/signup";
const logoutURL = "https://todo-app-server-gilt.vercel.app/api/logout";
const addTodoURL = "https://todo-app-server-gilt.vercel.app/api/createTodo";
const getTodoURL = "https://todo-app-server-gilt.vercel.app/api/todoList";
const markTodoURL = "https://todo-app-server-gilt.vercel.app/api/markTodo";
const removeTodoURL = "https://todo-app-server-gilt.vercel.app/api/removeTodo";

const LoginApi = async (data) => {
  return await axios.post(loginURL, data, {
    withCredentials: true,
  });
};

const SignUpApi = async (data) => {
  return await axios.post(signUpURL, data, {
    withCredentials: true,
  });
};

const LogoutApi = async () => {
  return await axios.get(logoutURL);
};

const AddTodoApi = async (data) => {
  let token = getToken();
  return await axios.post(addTodoURL, data, {
    headers: {
      auth: token,
    },
  });
};

const GetTodoListApi = async () => {
  let token = getToken();
  return await axios.get(getTodoURL, {
    headers: {
      auth: token,
    },
  });
};

const MarkTodoApi = async (data) => {
  let token = getToken();
  return await axios.post(markTodoURL, data, {
    headers: {
      auth: token,
    },
  });
};

const RemoveTodoApi = async (data) => {
  let token = getToken();
  return await axios.post(removeTodoURL, data, {
    headers: {
      auth: token,
    },
  });
};

export function getToken() {
  let user = localStorage.getItem("user");
  if (!user) return;
  const userObj = JSON.parse(user);
  return userObj.token;
}

export {
  LoginApi,
  SignUpApi,
  AddTodoApi,
  LogoutApi,
  GetTodoListApi,
  MarkTodoApi,
  RemoveTodoApi,
};
