import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import style from "./btnDarkMode.module.scss";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import detectDarkMode from "../../utils/detectDarkMode";

export function BtnDarkMode() {
	const [darkMode, setDarkMode] = useLocalStorage(
		"themeMode",
		detectDarkMode()
	);
	const toggleDarkMode = () => {
		darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
	};
	useEffect(() => {
		if (darkMode === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	useEffect(() => {
		// Если меняются системные настройки, меняем тему
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				const newColorScheme = event.matches ? "dark" : "light";
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);
	return (
		<button
			className={
				darkMode === "dark"
					? `${style.darkModeBtn} ${style.darkModeBtn__active}`
					: `${style.darkModeBtn}`
			}
			onClick={() => {
				toggleDarkMode();
			}}
		>
			<img src={sun} alt="Light mode" className={style.darkModeBtn__icon} />
			<img src={moon} alt="Dark mode" className={style.darkModeBtn__icon} />
		</button>
	);
}
