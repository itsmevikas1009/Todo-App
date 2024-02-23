import express from "express";
import SignUp from "../controllers/SignUp.controller.js";
import Login from "../controllers/Login.controller.js";
import Logout from "../controllers/Logout.controller.js";
import createTodo from "../controllers/Todo.controller.js";
import { GetTodos } from "../controllers/TodoList.controller.js";
import { MarkTodo } from "../controllers/MarkTodo.controller.js";
import { RemoveTodo } from "../controllers/RemoveTodo.controller.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

//SignUp route
apiRoute.post('/signup', SignUp);

//Login route 
apiRoute.post('/login', Login);

// Logout route - clear session variables and destroy JWT token
apiRoute.get('/logout', Logout);

//Protected routes (routes that require user to be logged in)
// Add Todo Route
apiProtected.post('/createTodo', createTodo);

apiProtected.get('/todoList', GetTodos);

apiProtected.post('/removeTodo', RemoveTodo);

apiProtected.post('/markTodo', MarkTodo);

export default apiRoute;