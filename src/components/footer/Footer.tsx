import style from "./Footer.module.scss";
import vk from "../../img/icons/vk.svg";
import gitHub from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";
export function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.footer__wrapper}>
					<ul className={style.social}>
						<li className={style.social__item}>
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className={style.social__item}>
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className={style.social__item}>
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className={style.social__item}>
							<a href="#!">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className={style.social__item}>
							<a href="#!">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className={style.copyright}>
						<p>2024</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
