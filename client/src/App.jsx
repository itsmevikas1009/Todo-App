import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import Error from "./components/Error.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const info = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(info));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard user={user} useState={setUser} />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: <SignUp user={user} useState={setUser} />,
    },
    {
      path: "/login",
      element: <Login user={user} useState={setUser} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
