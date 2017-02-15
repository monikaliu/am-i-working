document.getElementsByClassName("btn")[0].addEventListener("click", checkActivity, false);

function checkActivity() {
	hideElement(document.querySelector(".btn"));
	showElement(document.querySelector(".spinner"));
	setTimeout(showResult, 1500);
}

function showResult(){
	hideElement(document.querySelector(".spinner"));
	showElement(document.querySelector(".answer"));
}

function hideElement(el) {
	el.classList.remove("show");
	el.classList.add("hide"); 
}

function showElement(el) {
	el.classList.remove("hide");
	el.classList.add("show"); 
}

