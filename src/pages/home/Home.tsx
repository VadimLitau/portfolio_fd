import { Header } from "../../components/Header/Header";
import style from "./Home.module.scss";
export function Home() {
	return (
		<>
			<Header />
			<main className={style.section}>
				<div className={style.container}>
					<ul className={style.contentList}>
						<li className={style.contentList__item}>
							<h2 className={style.title_2}>Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
								BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
							</p>
						</li>
						<li className={style.contentList__item}>
							<h2 className={style.title_2}>Backend</h2>
							<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}
