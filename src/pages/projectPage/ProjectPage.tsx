import { BtnGitHub } from "../../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import style from "./ProjectPage.module.scss";
import { petProjectsData, freelanceProject, workProject } from "../../helpers/projectsData";
export function ProjectPage() {
	const { id } = useParams<{ id: string }>();
	const project = petProjectsData.find((item) => item.id === Number(id));
  const freeProject = freelanceProject.find((item) => item.id === Number(id));
  const wProject = workProject.find((item) => item.id === Number(id));

	return (
		<section className={style.section}>
			<div className={style.container}>
				<div className={style.projectDetails}>
					{project && (
						<>
							<h2 className={style.title_1}>{project.title}</h2>
							<img
								src={project.img_big}
								alt=""
								className={style.projectDetails__cover}
							/>
							<div className={style.projectDetails__desc}>
								<p>{project.skils}</p>
							</div>
							{project.gitHubLink && (
								<BtnGitHub link={project.gitHubLink} btnText={"GitHub repo"} />
							)}
							{project.demoLink && (
								<BtnGitHub demoLink={project.demoLink} btnText={"Open Demo"} />
							)}
						</>
					)}
          {freeProject && (
						<>
							<h2 className={style.title_1}>{freeProject.title}</h2>
							<img
								src={freeProject.img_big}
								alt=""
								className={style.projectDetails__cover}
							/>
							<div className={style.projectDetails__desc}>
								<p>{freeProject.skils}</p>
							</div>              
              <p className={style.projectDetails__info}>{freeProject.info}</p>
							{freeProject.demoLink && (
								<BtnGitHub demoLink={freeProject.demoLink} btnText={"Open Link"} />
							)}
						</>
					)}
          {wProject && (
						<>
							<h2 className={style.title_1}>{wProject.title}</h2>
							<img
								src={wProject.img_big}
								alt=""
								className={style.projectDetails__cover}
							/>
							<div className={style.projectDetails__desc}>
								<p className={`${style.title_1} ${style.title_3}`}>{wProject.skils}</p>
							</div>              
              <p className={style.projectDetails__info}>{wProject.info}</p>
							{wProject.demoLink && (
								<BtnGitHub demoLink={wProject.demoLink} btnText={"Open Link"} />
							)}
              <h3 className={`${style.title_1} ${style.title_3}`}>Выполненные задачи</h3>
              <ul className={style.task__list}>
                { wProject.done_task?.map((task, i)=>(
                  <li className={style.task__listItem} key={`${task}-${i}`}>{task}</li>
                ))}
              </ul>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
