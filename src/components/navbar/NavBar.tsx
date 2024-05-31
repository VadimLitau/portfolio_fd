import { NavLink } from "react-router-dom";
import { BtnDarkMode } from "../btnDarkMode/btnDarkMode";
import style from "./NavBar.module.scss";

export function NavBar() {
	const activeLink = `${style.nav_list__link} ${style.nav_list__link__active}`;
	const normalLink = `${style.nav_list__link}`;

	return (
		<nav className={style.nav}>
			<div className={style.container}>
				<div className={style.nav_row}>
					<NavLink to="./" className={style.logo}>
						<strong>Portfolio</strong>
					</NavLink>
					<BtnDarkMode />
					<ul className={style.nav_list}>
						<li className={style.nav_list__item}>
							<NavLink
								to="./"
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink;
								}}
							>
								Home
							</NavLink>
						</li>
						<li className={style.nav_list__item}>
							<NavLink
								to="./projects"
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink;
								}}
							>
								Projects
							</NavLink>
						</li>
						<li className={style.nav_list__item}>
							<NavLink
								to="./contacts"
								className={({ isActive }) => {
									return isActive ? activeLink : normalLink;
								}}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
