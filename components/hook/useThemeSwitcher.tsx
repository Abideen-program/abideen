import { useEffect, useState } from "react";
const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        console.log({ mode, userPref });
        let theme = userPref === "dark" ? "dark" : "light";
        setMode(theme);

        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        console.log({ mode, userPref });
        let theme = mediaQuery.matches ? "dark" : "light";
        setMode(theme);
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
