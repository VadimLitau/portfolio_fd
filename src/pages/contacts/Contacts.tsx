import style from "./Contacts.module.scss";

export function Contacs() {
	return (
		<main className={style.section}>
			<div className={style.container}>
				<h1 className={style.title_1}>Contacts</h1>

				<ul className={style.contentList}>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Location</h2>
						<p>Moscow, Russia</p>
					</li>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79051234567">+7 (905) 123-45-67</a>
						</p>
					</li>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Email</h2>
						<p>
							<a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}
