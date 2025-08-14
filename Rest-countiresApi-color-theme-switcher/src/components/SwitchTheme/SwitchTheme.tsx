import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // or any icons you like

import "./SitchTeme.css";
type Theme = "dark" | "light";

function SwitchTheme() {
  const [theme, settheme] = useState<Theme>("light");
  const toggel = () => {
    const t = theme === "light" ? "dark" : "light";
    settheme(t);
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);
  return (
    <div>
      <button onClick={toggel} className="btn">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default SwitchTheme;
