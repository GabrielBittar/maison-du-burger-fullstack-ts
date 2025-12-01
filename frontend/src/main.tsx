import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Register />
  </StrictMode>,
);
