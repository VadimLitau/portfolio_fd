import style from "./ProjectsPage.module.scss";
import { Project } from "../../components/project/Project";
import { petProjectsData, freelanceProject, workProject } from "../../helpers/projectsData";

export function ProjectsPage() {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<h1 className={style.title_1}>Projects</h1>
        <div className={style.project_block}>
          <h2 className={style.title_2}>Work Projects</h2>
          <ul className={style.projects}>
            {workProject.map((item) => (
              <Project
                img={item.img}
                title={item.title}
                key={item.id}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <div className={style.project_block}>
          <h2 className={style.title_2}>Freelance Projects</h2>
          <ul className={style.projects}>
            {freelanceProject.map((item) => (
              <Project
                img={item.img}
                title={item.title}
                key={item.id}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <div className={style.project_block}>
          <h2 className={style.title_2}>Pet Projects</h2>
          <ul className={style.projects}>
            {petProjectsData.map((item) => (
              <Project
                img={item.img}
                title={item.title}
                key={item.id}
                id={item.id}
              />
            ))}
          </ul>
        </div>        
			</div>
		</section>
	);
}
