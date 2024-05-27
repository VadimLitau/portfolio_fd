import { NavLink } from "react-router-dom";
import style from "./Projects.module.scss";
interface IProject {
	img: string;
	title: string;
	id: number;
}
export function Project({ img, title, id }: IProject) {
	return (
		<NavLink to={`/project/${id}`}>
			<li className={style.project}>
				<img src={img} alt={title} className={style.project__img} />
				<h3 className={style.project__title}>{title}</h3>
			</li>
		</NavLink>
	);
}
