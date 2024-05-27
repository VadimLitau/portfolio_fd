import style from "./Contacts.module.scss";

export function Contacs() {
	return (
		<main className={style.section}>
			<div className={style.container}>
				<h1 className={style.title_1}>Contacts</h1>

				<ul className={style.contentList}>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Location</h2>
						<p>Kazakhstan, Ust-Kamenogorsk</p>
					</li>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Telegram</h2>
						<p>
							<a href="https://t.me/FallenArh">@FallenArh</a>
						</p>
					</li>
					<li className={style.contentList__item}>
						<h2 className={style.title_2}>Email</h2>
						<p>
							<a href="mailto:vadimlitau@yandex.kz">vadimlitau@yandex.kz</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}
