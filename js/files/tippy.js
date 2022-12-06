// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

const ongoing = document.querySelector('#ongoing');

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-ongoing]', {
	content: ongoing,
	allowHTML: true,
	interactive: true,
	arrow: false,
});

