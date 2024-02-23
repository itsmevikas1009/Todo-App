import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Animation from "./components/Animation.jsx";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "./service/ApiCall.jsx";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    document.title = "Todo App - Login";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    LoginApi(data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.reload();
          navigate("/");
          return;
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err.res));
  };

  return (
    <div className="pt-16">
      <NavBar />
      <section>
        <div className="flex md:flex-row flex-col items-center justify-center md:px-6 md:py-8 mx-8 md:mx-20">
          <Animation />
          <div className="w-full my-8 items-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Login
              </h1>
              <form
                action=""
                method="post"
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2  font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-2xl text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Login
                </button>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-gray-600 hover:underline dark:text-gray-500"
                  >
                    Sign Up here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
