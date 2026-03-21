// src/utils/auth.js

export const register = ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find((u) => u.email === email)) {
    return { success: false, message: "Email already registered" };
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
};

export const login = ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return { success: false, message: "Invalid credentials" };

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true };
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const forgotPassword = (email, newPassword) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1) return { success: false, message: "Email not found" };

  users[userIndex].password = newPassword;
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
};