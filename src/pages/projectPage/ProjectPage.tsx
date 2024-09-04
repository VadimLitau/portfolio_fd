import { BtnGitHub } from "../../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import style from "./ProjectPage.module.scss";
import { projectsData } from "../../helpers/projectsData";
export function ProjectPage() {
	const { id } = useParams<{ id: string }>();
	const project = projectsData.find((item) => item.id === Number(id));
	return (
		<section className={style.section}>
			<div className={style.container}>
				<div className={style.projectDetails}>
					{project && (
						<>
							<h1 className={style.title_1}>{project.title}</h1>
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
				</div>
			</div>
		</section>
	);
}
