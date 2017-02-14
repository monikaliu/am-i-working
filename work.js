function checkActivity(btn) {
	btn.className += 'hide';
	var spinner = document.getElementsByClassName("spinner")[0];
	spinner.className.baseVal = spinner.className.baseVal.replace('hide','show');
	setTimeout(function(){showResult(spinner);}, 1500);
}

function showResult(spinner){
	spinner.className.baseVal = spinner.className.baseVal.replace('show','hide');
	var answer = document.getElementsByClassName("answer")[0];
	answer.className = answer.className.replace('hide','show'); 
}