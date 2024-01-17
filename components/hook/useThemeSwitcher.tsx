import { useEffect, useState } from "react";
const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  
  useEffect(() => {
    const mediaQuery = matchMedia(preferDarkQuery);
    const userPref = localStorage.getItem("theme")!;
    setMode(userPref)

    const handleChange = () => {
      if (userPref) {
        let theme = userPref === "dark" ? "dark" : "light";
        setMode(theme);

        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let theme = mediaQuery.matches ? "dark" : "light";
        setMode(theme);
        localStorage.setItem("theme", theme);
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
      document.documentElement.classList.remove("light");
    } if(mode === 'light') {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeSwitcher;
