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

const api = axios.create({
  withCredentials: true, // Ensures cookies are sent with the requests
});

// API Calls

const LoginApi = async (data) => {
  return await api.post(loginURL, data);
};

const SignUpApi = async (data) => {
  return await api.post(signUpURL, data);
};

const LogoutApi = async () => {
  return await api.get(logoutURL);
};

const AddTodoApi = async (data) => {
  const token = getToken(); // Get token from localStorage or cookies
  return await api.post(addTodoURL, data, {
    headers: {
      auth: token, // Attach token to headers
    },
  });
};

const GetTodoListApi = async () => {
  const token = getToken();
  return await api.get(getTodoURL, {
    headers: {
      auth: token,
    },
  });
};

const MarkTodoApi = async (data) => {
  const token = getToken();
  return await api.post(markTodoURL, data, {
    headers: {
      auth: token,
    },
  });
};

const RemoveTodoApi = async (data) => {
  const token = getToken();
  return await api.post(removeTodoURL, data, {
    headers: {
      auth: token,
    },
  });
};

// Token function (check localStorage or cookies for token)
export function getToken() {
  const user = localStorage.getItem("user");
  if (!user) return null;
  const userObj = JSON.parse(user);
  return userObj.token; // Token from localStorage
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
