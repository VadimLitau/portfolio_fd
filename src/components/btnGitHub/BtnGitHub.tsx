import style from "./BtnGitHub.module.scss";
import githubIcon from "../../img/icons/gitHub-black.svg";
import vercelIcon from "../../img/icons/vercelIcon.svg";

interface IBtnGitHub {
	link?: string;
	demoLink?: string;
	btnText: string;
}

export function BtnGitHub({ link, demoLink, btnText }: IBtnGitHub) {
	return (
		<>
			<a href={link || demoLink} target="_blank" className={style.btnOutline}>
				{link && <img src={githubIcon} alt="Иконка GitHub" />}
				{demoLink && <img src={vercelIcon} alt="Иконка Vercel" />}
				{btnText}
			</a>
		</>
	);
}
