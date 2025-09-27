import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e: any) => {
      setDarkMode(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() =>
        setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      }
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
      {darkMode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
