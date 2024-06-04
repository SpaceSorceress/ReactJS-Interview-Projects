import useLocalStorage from "../../hooks/useLocalStorage";
import Header from "../Header";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="ldm-container">
        <Header title={"Light/Dark Theme"} />
        <button className="ldm-button" onClick={handleThemeToggle}>
          Change Theme
        </button>
      </div>
    </div>
  );
}
