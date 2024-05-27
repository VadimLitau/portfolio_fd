import style from "./Projects.module.scss";
import { Project } from "../../components/project/Project";
import { projectsData } from "../../helpers/projectsData";

export function Projects() {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.title_1}>Projects</h2>
				<ul className={style.projects}>
					{projectsData.map((item) => (
						<Project
							img={item.img}
							title={item.title}
							key={item.id}
							id={item.id}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
