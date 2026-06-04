import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utilis/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("foodaddaUsers")) || [];

    const emailExists = users.find((user) => user.email === email);

    if (!emailExists) {
      setError("No account found with this email. Please sign up.");
      return;
    }

    if (emailExists.password !== password) {
      setError("Incorrect password.");
      return;
    }

    setError("");

    dispatch(
      login({
        name: emailExists.name,
        email: emailExists.email,
      }),
    );

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[85%] max-w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
          Welcome to FoodAdda 🍔
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error}</p>

            {error.includes("sign up") && (
              <Link to="/signup" className="font-semibold underline">
                Create an account
              </Link>
            )}
          </div>
        )}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
