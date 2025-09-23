import belaela from "../img/projects/belaela.svg";
import belaelaBig from "../img/projects/belaela_big.png";
import tere from "../img/projects/tere.png";
import tereBig from "../img/projects/tere_big.png";
import toDo from "../img/projects/ToDoApp.png";
import diorama from '../img/projects/diorama.png';
import dioramaBig from '../img/projects/diorama_big.png';
import aiAssist from '../img/projects/aiAssist.png';
import aiAssistBig from '../img/projects/aiAssist_big.png';
import dinamo from '../img/projects/dinamo.png';
import dinamoBig from '../img/projects/dinamo_big.png';
import sibur from '../img/projects/sibur.png';
import siburBig from '../img/projects/sibur_big.png';
import rosseti from '../img/projects/rosseti.png';
import rossetBig from '../img/projects/rosseti_big.png';
import meikgu from '../img/projects/meikgu.png';
import meikguBig from '../img/projects/meikgu_big.png';


export const petProjectsData = [
	{
		img: belaela,
		img_big: belaelaBig,
		title: "Belalea",
		gitHubLink: "https://github.com/VadimLitau/Belaela",
		demoLink: "https://belaela.vercel.app/",
		skils: "React, TS, SASS, Suztand, React Hook Form",
		id: 1,
	},
	{
		img: tere,
		img_big: tereBig,
		title: "Tere",
		gitHubLink: "https://github.com/VadimLitau/Tere",
		demoLink: "https://vadimlitau.github.io/Tere/",
		skils: "html, sass, gulp",
		id: 2,
	},
	{
		img: toDo,
		img_big: toDo,
		title: "To Do App",
		gitHubLink: "https://github.com/VadimLitau/ToDo_TS",
		demoLink: "https://to-do-ts-red.vercel.app/",
		skils: "React, TS, SASS, Suztand",
		id: 3,
	},
];

export const freelanceProject = [  
	{
		img: diorama,
		img_big: dioramaBig,
		title: "Retro Frames",
		demoLink: "https://retro-frames.ru/",
		skils: "Gulp, Html, SCSS, Swiper",
		id: 4,
    info: 'Проект собирался в сжатые сроки — примерно за 5–6 дней, с частыми изменениями по дизайну и функционалу от заказчика. Он планировался как временный: для тестирования продаж и возможной подготовки интернет-магазина.',
	},
  {
		img: aiAssist,
		img_big: aiAssistBig,
		title: "AI Ассистент",
		demoLink: "https://www.asistrader.ai/",
		skils: "Html, Css, Swiper",
		id: 5,
    info: 'Небольшой лендинг, собранный за 6-8 часов. Утром начал работать, вечером выложил на хостинг и привязал домен',
	},
];

export const workProject = [
  {
		img: dinamo,
		img_big: dinamoBig,
		title: "Динамо CRM",
		demoLink: "",
		skils: "Vue, Css, Vuetify",
		id: 6,
    info: 'Разработка CRM для ФК «Динамо» для команды видеоаналитиков. Система стала централизованным хранилищем видео с расширенной фильтрацией, возможностью разделения записей на ключевые моменты и наложения графических элементов. Реализованы плейлисты, группировка по папкам, ролевая модель доступа и удобный поиск.',
    done_task: [
      'Верстка десктопной версии приложения',
      'Адаптация компонентов Vuetify под макет',
      'Разработка UI-компонентов',
      'Разработка валидации для форм и инпутов',
      'Создание кастомного DatePicker',
      'Проработка внутренней логики компонентов',
      'Исправление багов в верстке и бизнес-логике'
    ],
	},
  {
		img: sibur,
		img_big: siburBig,
		title: "СИБУР годовой отчет",
		demoLink: "https://ar24.sibur.ru/",
		skils: "Astro, SCSS",
		id: 7,
    info: 'Участвовал в разработке интегрированного годового отчёта компании СИБУР. Внёс вклад в вёрстку, адаптацию блоков и проработку интерактивных элементов.',
    done_task: [
      'Вёрстка и адаптация отдельных блоков отчёта',
      'Доработка существующих («чужих») блоков',
      'Разработка и адаптация анимаций',
      'Контроль merge-request’ов и устранение конфликтов при слиянии',
      'Исправление багов во вёрстке'
    ],

	},
  {
		img: rosseti,
		img_big: rossetBig,
		title: "Россети отчет за 2024 год",
		demoLink: "https://sr24.rosseti.ru/",
		skils: "Astro, SCSS",
		id: 8,
    info: 'Участвовал в разработке годового отчёта компании «Россети» за 2024 год. Работа велась без готового макета — перенос информации выполнялся с максимальным сохранением дизайна и структуры.',
    done_task: [
      'Вёрстка и адаптация отдельных блоков отчёта',
      'Доработка существующих («чужих») блоков',
      'Разработка и адаптация анимаций',
      'Контроль merge-request’ов и устранение конфликтов при слиянии',
      'Работа с изображениями: импорт и перерисовка из PDF',
      'Исправление багов во вёрстке'
    ],
	},
  {
		img: meikgu,
		img_big: meikguBig,
		title: "Платформа прохожденя опросов",
		skils: "Vue3, CSS, vuepic",
		id: 9,
    info: 'Участвовал в разработке платформы для прохождения опросов для ВШГУ. На платформе реализованы функции анализа, контроля, создания и редактирования отчётов. Добавлена ролевая модель, интегрирован ИИ для анализа данных. По завершении опроса предусмотрена выгрузка PDF с результатами.',
    done_task: [
      'Вёрстка и адаптация проекта',
      'Доработка DatePicker от vuepic под проект',
      'Разработка UI-компонентов',
      'Реализация внутренней логики компонентов',
      'Вёрстка HTML-шаблона для генерации PDF',
      'Вёрстка email для рассылки',
      'Исправление багов во вёрстке'
    ],
	},
]


