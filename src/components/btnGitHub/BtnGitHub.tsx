import style from "./BtnGitHub.module.scss";
import githubIcon from "../../img/icons/gitHub-black.svg";

interface IBtnGitHub {
	link: string;
}

export function BtnGitHub({ link }: IBtnGitHub) {
	return (
		<>
			<a href={link} target="_blank" className={style.btnOutline}>
				<img src={githubIcon} alt="" />
				GitHub repo
			</a>
		</>
	);
}
