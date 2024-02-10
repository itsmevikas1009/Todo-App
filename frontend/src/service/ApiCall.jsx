import axios from "axios";

const LoginApi = async (data) => {
  return await axios.post("http://localhost:3000/api/login", data, {
    withCredentials: true,
  });
};

const SignUpApi = async (data) => {
  return await axios.post("http://localhost:3000/api/signup", data, {
    withCredentials: true,
  });
};

const LogoutApi = async () => {
  return await axios.get("http://localhost:3000/api/logout");
};

const AddTodoApi = async (data) => {
  let token = getToken();
  return await axios.post("http://localhost:3000/api/createTodo", data, {
    headers: {
      auth: token,
    },
  });
};

const GetTodoListApi = async () => {
  let token = getToken();
  return await axios.get("http://localhost:3000/api/todoList", {
    headers: {
      auth: token,
    },
  });
};

const MarkTodoApi = async (data) => {
  let token = getToken();
  return await axios.post("http://localhost:3000/api/markTodo", data, {
    headers: {
      auth: token,
    },
  });
};

const RemoveTodoApi = async (data) => {
  let token = getToken();
  return await axios.post("http://localhost:3000/api/removeTodo", data, {
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
