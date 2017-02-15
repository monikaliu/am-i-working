(function() {
	document.getElementsByClassName("button_check")[0].addEventListener("click", checkActivity, false);

	function checkActivity() {
		hideElement(document.querySelector(".button_check"));
		showElement(document.querySelector(".spinner"));
		setTimeout(showResult, 1500);
	}

	function showResult(){
		hideElement(document.querySelector(".spinner"));
		showElement(document.querySelector(".answer"));
	}

	function hideElement(element) {
		element.classList.add("hide"); 
	}

	function showElement(element) {
		element.classList.remove("hide");
	}

})();

