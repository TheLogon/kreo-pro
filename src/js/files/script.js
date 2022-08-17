// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const btns = document.querySelectorAll(".magnetic")

btns.forEach(btn => {
	btn.addEventListener("mousemove", e => {
		const position = btn.getBoundingClientRect()
		const x = e.pageX - position.left - position.width
		const y = e.pageY - position.top - position.height

		btn.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)"
	})
})

btns.forEach(btn => {
	btn.addEventListener("mouseout", e => {
		btn.style.transform = "translate(0px, 0px)"
	})
})
