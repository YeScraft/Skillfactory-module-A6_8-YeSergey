let progressBar = 0;

function p1Change() {
	progressBar = progressBar + 1;
	$("#bar").attr("style","width:"+progressBar+"%");
	$("#bar").text(progressBar+"%");
	if (progressBar>=100){
		end();
	}
}

function p3Change() {
	progressBar = progressBar + 3;
	$("#bar").attr("style","width:"+progressBar+"%");
	$("#bar").text(progressBar+"%");
	if (progressBar>=100){
		end();
	}
}
function p7Change() {
	progressBar = progressBar + 7;
	$("#bar").attr("style","width:"+progressBar+"%");
	$("#bar").text(progressBar+"%");
	if (progressBar>=100){
		end();
	}
}

function end() {
	progressBar = 100;
	$("#bar").text(progressBar+"%");
}

function p1() {

	$("#p1").click(p1Change);
	$("#p3").click(p3Change);
	$("#p7").click(p7Change);
	console.log("скрипт подгрузился");


}

$(document).ready(p1);
