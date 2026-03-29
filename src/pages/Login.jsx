import { useState } from "react";
import { login, register, forgotPassword } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate(); // <-- move useNavigate here inside the component

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // login, register, forgot
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    let result;

    if (mode === "login") {
      result = login({ email, password });
      if (result.success) {
        setMessage("Login successful!");
        if (onLoginSuccess) onLoginSuccess(); // notify parent dashboard
        navigate("/dashboard"); // <-- navigate here after login
      }
    } else if (mode === "register") {
      result = register({ email, password });
      if (result.success) {
        setMessage("Registration successful!");
        setMode("login"); // switch to login after successful registration
      }
    } else if (mode === "forgot") {
      result = forgotPassword(email, newPassword);
    }

    if (result && result.success) {
      setMessage("Success!");
      // clear input fields after success
      setEmail("");
      setPassword("");
      setNewPassword("");
    } else if (result && !result.success) {
      setMessage(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {mode === "login"
          ? "Login"
          : mode === "register"
          ? "Register"
          : "Reset Password"}
      </h2>

      {message && <p className="text-red-500 mb-2">{message}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />

      {mode !== "forgot" && (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
      )}

      {mode === "forgot" && (
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded mb-2"
      >
        {mode === "login"
          ? "Login"
          : mode === "register"
          ? "Register"
          : "Reset Password"}
      </button>

      {/* Mode Switch Links */}
      {mode === "login" && (
        <div className="flex justify-between text-sm">
          <p className="text-blue-500 cursor-pointer" onClick={() => setMode("forgot")}>
            Forgot Password?
          </p>
          <p className="text-blue-500 cursor-pointer" onClick={() => setMode("register")}>
            Create Account
          </p>
        </div>
      )}
      {mode !== "login" && (
        <p className="text-blue-500 text-sm cursor-pointer" onClick={() => setMode("login")}>
          Back to Login
        </p>
      )}
    </div>
  );
}