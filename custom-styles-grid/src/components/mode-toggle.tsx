import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const SWITCH_THEME = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
      }
    }
  };

  return (
    <button
      onClick={SWITCH_THEME}
      className="absolute size-8 border dark:border-neutral-800 border-neutral-200 rounded-md right-4 top-4 flex justify-center items-center"
    >
      <Sun className="absolute inset-0 m-auto size-5 shrink-0 text-neutral-500 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300" />
      <Moon className="absolute inset-0 m-auto size-5 shrink-0 dark:text-neutral-200 scale-0 dark:scale-100 dark:rotate-0 rotate-45 transition-all duration-300" />
    </button>
  );
};

export default ModeToggle;
