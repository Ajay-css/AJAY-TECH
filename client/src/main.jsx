import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// ✅ THEME INIT BEFORE RENDER
const savedTheme = localStorage.getItem("theme")

if (savedTheme) {
  document.documentElement.classList.add(savedTheme)
} else {
  document.documentElement.classList.add("dark") // default theme
  localStorage.setItem("theme", "dark")
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
)
