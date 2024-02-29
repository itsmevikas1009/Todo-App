import axios from "axios";

const localURL = "http://localhost:3000/";
const vercelURL = "https://todo-app-server-gilt.vercel.app/";

const URL = vercelURL; // Change to localURL if testing locally

const loginURL = `${URL}api/login`;
const signUpURL = `${URL}api/signup`;
const logoutURL = `${URL}api/logout`;
const addTodoURL = `${URL}api/createTodo`;
const getTodoURL = `${URL}api/todoList`;
const markTodoURL = `${URL}api/markTodo`;
const removeTodoURL = `${URL}api/removeTodo`;

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
